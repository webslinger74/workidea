const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const EngagementSchema = new Schema({
    category: {
        type:String,
        required:true,
        unique: 1,
        maxlength:750
    },
    score:{
        type:String,
        required:true,
        maxlength:1000
    },
    diffPrev:{
        type:String,
        required:true,
        maxlength:1000
    },
    diffParent:{
        type:String,
        required:true,
        maxlength:1000
    },
    diffDWP:{
        type:String,
        required:true,
        maxlength:100
    }
   
},{timestamps:true});

const Engagementcat = mongoose.model('engagementcats', EngagementSchema);
module.exports = Engagementcat;