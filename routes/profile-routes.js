const router = require('express').Router();

const isLoggedIn = require('../utils/middlewares/isLoggedIn');


router.get('/', isLoggedIn, (req, res) => {
    res.send('LoggedIn as' + req.user.name);
});

module.exports = router;