const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SlideSchema = new Schema({
    titleOne: {
        type:String,
        required:true,
        maxlength:30
    },
    titleTwo: {
        type:String,
        required:true,
        maxlength:30
    },
    pageCat: {
        required: true,
        type:String,
        maxlength:250
    },
    linkTitle: {
        type:String,
        required:true,
        maxlength:25
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const Slide = mongoose.model('slide', SlideSchema);
module.exports = Slide;