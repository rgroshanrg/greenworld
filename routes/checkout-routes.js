const router = require('express').Router();
const nodemailer = require('nodemailer');
const Plant = require('../utils/models/plant-model');
const User = require('../utils/models/user-model');
const Checkout = require('../utils/models/checkout-model');
const keys = require('../config/keys');
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
                    if(plant.isSucculents) {
                        plant.type = 'succulents';
                    } else if(plant.isOrchids) {
                        plant.type = 'orchids';
                    } else if(plant.isVegetable) {
                        plant.type = 'vegetable';
                    } else if(plant.isFlowring) {
                        plant.type = 'flowring';
                    }
                    items.push(plant);
                })
            });
        });
        promise.then(() => {
            res.render('checkout', {items : items, totalPrice : totalPrice});
        })
    })
});

router.post('/', isLoggedIn, (req, res) => {
    var check = {
        orderby: req.user._id,
        upiref : req.body.upiref,
        address : req.body.address,
        pin : req.body.pin,
        name : req.body.name,
        phone : req.body.phone,
        email: {type: String},
        items : [],
        plantnames : []
    };
    User.findOne({_id : req.user._id}, async (err, user) => {
        let promise = Promise.resolve();
        user.cartItems.forEach(itemid => {
            promise = promise.then(() => {
                return Plant.findOne({_id : itemid}, (err, plant) => {
                    plant.sold++;
                    plant.stock--;
                    check.items.push(plant._id);
                    check.plantnames.push(plant.name);
                    plant.save();
                }).then(p =>{


                    const transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: keys.GMAIL.EMAIL_ID,
                            pass: keys.GMAIL.EMAIL_PASS,
                        },
                    })
                
                    // send mail with defined transport object
                    let info = transporter.sendMail({
                        from: '"Green World" <greenworlds2021@gmail.com>',  // sender address
                        to: user.email, // list of receivers seperated by comma
                        subject: "Thanks for Shopping With Us [Green World]", // Subject line
                        text: "Thank you for shopping with Green World. Your Package will be delivered within 1 Week.", // plain text body
                    }, (error, info) => {
                
                        if (error) {
                            console.log(error)
                            return;
                        }
                        console.log('Message sent successfully!');
                        console.log(info);
                        transporter.close();
                        // res.send('Click the emailed Link');
                    });


                })
            });
        });
        promise.then(() => {
            user.cartItems = [];
            check.email = user.email;
            user.save();
            new Checkout(check).save().then(c => {
                res.render('ordersuccess');
            })
            
        })
    })

})

module.exports = router;