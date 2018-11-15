const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CharityContsSchema = new Schema({
        charity: {
        type:String,
        required:true,
        unique: 1,
        maxlength:200
    },
        amount: {
        required: true,
        type:String,
        maxlength:1000
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const CharityConts = mongoose.model('charityconts', CharityContsSchema);
module.exports = CharityConts;