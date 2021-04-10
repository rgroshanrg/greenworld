const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const localStrategy = require("passport-local");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');
const User = require('../utils/models/user-model');


passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});


passport.use(new localStrategy(User.authenticate()));


passport.use(new GoogleStrategy({
    //options for gs
    callbackURL: 'http://localhost:3000/auth/google/redirect',
    clientID: keys.GOOGLE.CLIENT_ID,
    clientSecret: keys.GOOGLE.CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        // console.log(profile);
        User.findOne({googleID: profile.id}).then((currUser) => {
            if(currUser) {
                console.log("User Already Exists");
                done(null, currUser);
                // currUser.authenticate();
            } else {

                User.findOne({email: profile._json.email}, (err, user) => {
                    if(!user) {
                        if(profile._json.email_verified) {
                            new User({
                                name: profile.displayName,
                                googleID: profile.id,
                                email: profile._json.email,
                                username: profile._json.email,
                                hasVerifiedEmail: true
                            }).save().then((newUser) => {
                                // console.log(newUser);
                                // newUser.authenticate();
                                done(null, newUser);
                            });
                        } else {
                            console.log("Email not Verified, Please verify your email from Google");
                        }
                    } else {
                        done('Already a user is present with same email. Try login with Google.', null);
                    }
                })
            
            }
        });
    })
)
