const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EngagementSchema = new Schema({
    category: {
        type:String,
        unique:1,
        required:true,
        maxlength:7500
    },
    score: {
        type:String,
        required:true,
        maxlength:7500
    },
    diffprev: {
        type:String,
        required:true,
        maxlength:7500
    },
    diffparent: {
        type:String,
        required:true,
        maxlength:7500
    },
    diffdwp: {
        type:String,
        required:true,
        maxlength:7500
    }
   
},{timestamps:true});

const Engagement = mongoose.model('engagement', EngagementSchema);
module.exports = Engagement;