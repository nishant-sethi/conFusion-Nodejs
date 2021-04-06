var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({

    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    facebookId: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);

/* 
export const phoneNumberwithCode = (message) => (value) => {    var value_split = value && value.split(';');    var valid = true;    if (value === '') return '';
    value &&        value_split.map((value) => {            var digits_value = value.trim().replace(/[^0-9]/g, '').length;            if (                digits_value < 5 ||                digits_value > 15 ||                value.endsWith('-') ||                value.startsWith('-') ||                value.includes('--') ||                !/^\+?[0-9-]*(\([0-9]+\)[0-9-]*)*[0-9;-]*$/.test(value.toString())            ) {                valid = false;            }        });    return !valid ? message : '';};-- 
RegardsNishant Sethi
*/
