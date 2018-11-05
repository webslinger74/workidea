const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WellBeingSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique: 1,
        maxlength:200
    },
    message: {
        required: true,
        type:String,
        maxlength:10000
    },
    publish:{
        required: true,
        type: Boolean
    },
    author:{
        required: true,
        type: String
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const WellBeing = mongoose.model('wellbeing', WellBeingSchema);
module.exports = WellBeing;