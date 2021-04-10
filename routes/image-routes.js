const router = require('express').Router();

const isLoggedIn = require('../utils/middlewares/isLoggedIn');


router.get('/1', (req, res) => {
    // res.send('LoggedIn as' + req.user.name);
    res.static('/images');
});

module.exports = router; 