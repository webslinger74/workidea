const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SportsContactSchema = new Schema({
    contactName: {
        type:String,
        required:true,
        unique: 1,
        maxlength:100
    },
    contactEmail: {
        required: true,
        unique:1,
        type:String,
        maxlength:100
    },
    position:{
        required: true,
        type:String,
        maxlength:200
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const SportsContact = mongoose.model('sportscontact', SportsContactSchema);
module.exports = SportsContact;