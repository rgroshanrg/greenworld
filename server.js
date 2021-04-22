const express = require('express');
const server = express();
const flash = require('connect-flash');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const User = require('./utils/models/user-model');
const Plant = require('./utils/models/plant-model');
const Checkout = require('./utils/models/checkout-model');

const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const imageRoutes = require('./routes/image-routes');
const plantRoutes = require('./routes/plant-routes');
const cartRoutes = require('./routes/cart-routes');
const checkoutRoutes = require('./routes/checkout-routes');

const isLoggedIn = require('./utils/middlewares/isLoggedIn');
const isNotLoggedIn = require('./utils/middlewares/isNotLoggedIn');
const { type } = require('os');


// View Engine Set
server.set('view engine', 'ejs');

server.use(cookieSession({
    name: 'session',
    maxAge: (24 * 60 * 60 * 1000),   // max age of session cookie - 1 days
    keys: [keys.SESSION.COOKIE_KEY]
}));

server.use(flash());


server.use(bodyParser.urlencoded({ extended: false }));
server.use(methodOverride('_method'));

// initialize passport
server.use(passport.initialize());
server.use(passport.session());


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(keys.MONGO.URI,connectionParams).then( () => {
        console.log('Connected to database ')
    }).catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

server.use(express.static(path.join(__dirname, '/public')));

//set up routes
server.use('/auth', authRoutes);
server.use('/profile', profileRoutes);
server.use('/images', imageRoutes);
server.use('/plant', plantRoutes);
server.use('/cart', cartRoutes);
server.use('/checkout', checkoutRoutes);

server.get('/about', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('about', {isAuthenticated : isAuthenticated, name : name});
});

server.get('/cancel-return', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('cancellation_return', {isAuthenticated : isAuthenticated, name : name});
});

server.get('/contact', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('contactus', {isAuthenticated : isAuthenticated, name : name});
});

server.get('/faq', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('faq', {isAuthenticated : isAuthenticated, name : name});
});

server.get('/services', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('services', {isAuthenticated : isAuthenticated, name : name});
});

server.get('/tac', (req, res) => {
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    res.render('TandC', {isAuthenticated : isAuthenticated, name : name});
});


server.get('/', (req, res) => {
        // res.render('index', {name: req.user.name});
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
        
    }
    if(isAuthenticated && req.user.isAdmin === true) {
        // var checks = [];

        Checkout.find({}, (err, checkouts) => {
            res.render('admin', {checkouts : checkouts.reverse()});
        })

        // res.render('admin');
    } else {        
        res.render('index', {isAuthenticated : isAuthenticated, name : name});
    }
});

server.get('/check', (req, res) => {
    img = '/images/27.jpg'
    res.render('check', {img : img});
})

server.listen( process.env.PORT || 3000, () => {
    console.log('Server has Started on PORT 3000');
})
