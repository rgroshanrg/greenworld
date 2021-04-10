const router = require('express').Router();
const passport = require('passport');
const User = require('../utils/models/user-model');
const isLoggedIn = require('../utils/middlewares/isLoggedIn');
const isNotLoggedIn = require('../utils/middlewares/isNotLoggedIn');
const passportLocalMongoose = require('passport-local-mongoose');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const keys = require('../config/keys');
const confirmMail = require('../utils/middlewares/confirmMail');



router.get('/confirmation/:token', function(req, res) {
    token = req.params.token;
    if (token) {
        try {
            jwt.verify(token, keys.GMAIL.EMAIL_SECRET, (e, decoded) => {
                if (e) {
                    console.log(e)
                    // req.flash('error', 'Sorry for inconvenience, We are having trouble in verifying you. Please try again.');
                    return res.send('Sorry for inconvenience, We are having trouble in verifying you. Please try again.');
                } else {
                    id = decoded.id;
                
                    //Update your database here with whatever the verification flag you are using 
                    console.log("auth-routes [64]");
                    User.findOne({_id: id}, (err, user) => {
                        user.hasVerifiedEmail = true;
                        user.isGeneralPublic = true;
                        console.log("auth-routes [67]");
                        user.save().then(() => {
                            res.redirect('/');
                        })
                    });
                }

            });
        } catch (err) {

            console.log(err)
            return res.send('Sorry for inconvinience, We are having trouble in verifying you. Please try again.');
        }
    } else {
        return res.send('Sorry for inconvinience, We are having trouble in verifying you. Please try again.');
    }

})


// MiddleWare to check if User has LoggedIn but not filled Additional Infos
// const isCompletedReg = (req, res, next) => {
//     if(req.user && req.user.rollNo == null) {
//         next();
//     } else {
//         res.redirect('/auth/login');
//     }
// }

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('signup', {error: req.flash('error')});
});

router.post('/signup', (req, res) => {
    let newUser = new User({
        username: req.body.email,
        email: req.body.email,        
        name: req.body.name
    });

    User.findOne({email: req.body.email}, (err, user) => {
        if(!user) {
            User.register(newUser, req.body.password, (err, user) => {
                console.log("Check - auth-routes [29]");
                if(err) {
                    console.log(err);
                    req.flash('error', 'Sorry for inconvenience, Please Try Again.');
                    return res.redirect('/auth/signup')
                } 
                passport.authenticate('local')(req, res, function() {
                    console.log("Check - auth-routes [35]");
                    return res.redirect('/');
                });
        
            });
        } else {
            req.flash('error', 'Already a user is present with same email. Try login with Google.')
        }
    }).then(() => {
        res.redirect('/auth/login');
    })

});


router.get('/login', isNotLoggedIn, (req, res) => {
    res.render('signin', {error: req.flash('error')});
})


// Since we are using the passport.authenticate() method, we should be redirected no matter what 
router.post('/login', passport.authenticate('local', { 
        failureRedirect: '/auth/login', 
        failureFlash: true
        // successRedirect: '/' 
    }),confirmMail , (err, req, res, next) => {
        
    if (err) {
        req.flash('error', 'Sorry for inconvenience, Please Try Again.');
        res.redirect('/auth/login');
    } else {
        res.redirect('/');
    }
});

//auth logout
router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    // res.send("Logging out");
    res.redirect('/auth/login');
});

// router.post()

//auth with google
router.get('/google', isNotLoggedIn, passport.authenticate('google', {
    scope: ['profile', 'email']
}));

//callback routes of google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // console.log(req.user);
    res.redirect('/');
});


router.get('/admin-panel', isLoggedIn, (req, res) => {
    if(req.user.isAdmin === true)
        res.render('admin-panel', {error: req.flash('error')});
    else {
        res.send('Not Accessible');
    }
})


router.post('/admin-panel', isLoggedIn, (req, res) => {
    if(req.user.isAdmin === true) {
        var newUser;
        if(req.body.acctype === "Health Worker") {
            newUser = new User({
                username: req.body.username,
                email: req.body.username,
                name: req.body.name,
                isHealthWorker: true,
                hasVerifiedEmail: true
            });
        } else if(req.body.acctype == "Government Official") {
            newUser = new User({
                username: req.body.username,
                email: req.body.username,
                name: req.body.name,
                isGovtOfficial: true,
                hasVerifiedEmail: true
            });
        } else {
            newUser = new User({
                username: req.body.username,
                email: req.body.username,
                name: req.body.name,
                isGeneralPublic: true,
                hasVerifiedEmail: true
            });
        }

        User.findOne({email: req.body.username}, (err, user) => {
                    if(!user) {
                        User.register(newUser, req.body.password, (err, user) => {
                            // console.log("Check - auth-routes [29]");
                            if(err) {
                                console.log(err);
                                req.flash('error', 'Sorry for inconvenience, Please Try Again.');
                                return res.redirect('/auth/admin-panel')
                            }
                    
                        });
                    } else {
                        req.flash('error', 'Already a user is present with same email. Try login with Google.')
                    }
                }).then(() => {
                    req.flash('error', 'User Created');
                    res.redirect('/auth/admin-panel');
                })

    } else {
        res.send("Access Denied");
    }
})

module.exports = router;