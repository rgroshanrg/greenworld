const isLoggedIn = (req, res, next) => {
    console.log("Check - isLoggedIn [2]");
    if(req.user) {
        if(req.user.hasVerifiedEmail === false) {
            return res.send('Click the emailed Link');
        }
        next();
    } else {
        res.redirect('/auth/login');
    }
}

module.exports = isLoggedIn;