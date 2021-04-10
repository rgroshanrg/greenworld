const router = require('express').Router();
const Plant = require('../utils/models/plant-model');
const User = require('../utils/models/user-model');
const isLoggedIn = require('../utils/middlewares/isLoggedIn');


router.get('/', isLoggedIn, (req, res) => {
    var items = [];
    var totalPrice = 0;
    User.findOne({_id : req.user._id}, async (err, user) => {
        let promise = Promise.resolve();
        user.cartItems.forEach(itemid => {
            promise = promise.then(() => {
                return Plant.findOne({_id : itemid}, (err, plant) => {
                    totalPrice += plant.price;
                    items.push(plant);
                })
            });
        });
        promise.then(() => {
            res.render('cart', {items : items, success: req.flash('success'), name : req.user.name, totalPrice : totalPrice});
        })
    })
})


router.get('/add/:pid', isLoggedIn, (req, res) => {
    var pid = req.params.pid;
    img = '/images/' + String(pid) + '.jpg';
    User.findOne({_id: req.user._id}, (err, user) => {
        if(err)
            console.log(err);
        Plant.findOne({imageLink : img}, (err, plant) => {
            if(err)
                console.log(err);
            user.cartItems.push(plant._id);
            user.save();
        }).then(p => {
            req.flash('success', 'Item Successfully Added to your Cart.');
            res.redirect('/cart');
        })
    })
});

router.get('/del/:pid', isLoggedIn, (req, res) => {
    var pid = req.params.pid;
    img = '/images/' + String(pid) + '.jpg';
    User.findOne({_id : req.user._id}, (err, user) => {
        let promise = Promise.resolve();
        promise = promise.then(() => {
            Plant.findOne({imageLink : img}, (err, plant) => {
                const idx = user.cartItems.indexOf(plant._id);
                // console.log(idx);
                if(idx > -1) 
                    user.cartItems.splice(idx, 1);
                user.save();
            })
        })
        promise.then(() => {
            req.flash('success', 'Item Successfully Removed from your Cart.')
            res.redirect('/cart');
        })
        
    })
});

module.exports = router;