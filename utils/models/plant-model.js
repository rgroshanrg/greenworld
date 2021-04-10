const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema({

    name : {type: String, default: null, unique: false},
    price : {type: Number, default: 100},
    stock : {type: Number, default: 100},
    sold : {type: Number, default: 0},
    imageLink : {type: String},
    about : {type : String, default : null},

    sunlight : {type : String, default : null},
    watering : {type : String, default : null},
    pottingMix : {type : String, default : null},

    care : {type : String, default : null},
    isSucculents : {type: Boolean, default: false},
    isOrchids : {type: Boolean, default: false},
    isVegetable : {type: Boolean, default: false},
    isFlowring : {type: Boolean, default: false},
    username : {unique : false}

});

plantSchema.plugin(passportLocalMongoose);

const Plant = mongoose.model('plant', plantSchema);

module.exports = Plant;