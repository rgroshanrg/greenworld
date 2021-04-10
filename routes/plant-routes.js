const router = require('express').Router();

const isLoggedIn = require('../utils/middlewares/isLoggedIn');
const User = require('../utils/models/user-model');
const Plant = require('../utils/models/plant-model');

router.get('/succulents', (req, res) => {
    var pname = 'SUCCULENTS';
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    Plant.find({isSucculents : true}, (err, plants) => {
        res.render('plantgrps', {plants : plants, isAuthenticated : isAuthenticated, n : 'succulents', pname : pname, name : name});
    })
})

router.get('/orchids', (req, res) => {
    var pname = 'ORCHIDS';
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    Plant.find({isOrchids : true}, (err, plants) => {
        res.render('plantgrps', {plants : plants, isAuthenticated : isAuthenticated, n : 'orchids', pname : pname, name : name});
    })
})

router.get('/vegetable', (req, res) => {
    var pname = 'VEGETABLE GARDEN';
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    Plant.find({isVegetable : true}, (err, plants) => {
        res.render('plantgrps', {plants : plants, isAuthenticated : isAuthenticated, n : 'vegetable', pname : pname, name : name});
    })
})
router.get('/flowring', (req, res) => {
    var pname = 'FLOWERING';
    var isAuthenticated = false, name = '';
    if(req.user) {
        isAuthenticated = true;
        name = req.user.name;
    }
    Plant.find({isFlowring : true}, (err, plants) => {
        res.render('plantgrps', {plants : plants, isAuthenticated : isAuthenticated, n : 'flowring', pname : pname, name : name});
    })
})


//-----------------------------------------------------------------------------------------------------


router.get('/succulents/:pid', (req, res) => {
    pid = req.params.pid;
    if(Number(pid) > 0 && Number(pid) < 22) {
        img = '/images/' + String(pid) + '.jpg',
        Plant.findOne({imageLink : img, isSucculents : true}, (err, plant) => {
            if(err)
                console.log(err);

            res.render('succulents-plant', {plant : plant});
        })
    } else {
        res.send("<h1>Not Available</h1>")
    }
});

router.get('/orchids/:pid', (req, res) => {
    pid = req.params.pid;
    if(Number(pid) > 21 && Number(pid) < 42) {
        img = '/images/' + String(pid) + '.jpg',
        Plant.findOne({imageLink : img, isOrchids : true}, (err, plant) => {
            if(err)
                console.log(err);

            res.render('orchids-plant', {plant : plant});
        })
    } else {
        res.send("<h1>Not Available</h1>")
    }
});

router.get('/vegetable/:pid', (req, res) => {
    pid = req.params.pid;
    if(Number(pid) > 41 && Number(pid) < 62) {
        img = '/images/' + String(pid) + '.jpg',
        Plant.findOne({imageLink : img, isVegetable : true}, (err, plant) => {
            if(err)
                console.log(err);

            res.render('succulents-plant', {plant : plant});
        })
    } else {
        res.send("<h1>Not Available</h1>")
    }
});

router.get('/flowring/:pid', (req, res) => {
    pid = req.params.pid;
    if(Number(pid) > 61 && Number(pid) < 82) {
        img = '/images/' + String(pid) + '.jpg',
        Plant.findOne({imageLink : img, isFlowring : true}, (err, plant) => {
            if(err)
                console.log(err);

            res.render('succulents-plant', {plant : plant});
        })
    } else {
        res.send("<h1>Not Available</h1>")
    }
});

module.exports = router;