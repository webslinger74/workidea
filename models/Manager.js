const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ManagerSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique: 1,
        maxlength:200
    },
    message: {
        required: true,
        type:String,
        maxlength:100000
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

const Manager = mongoose.model('manager', ManagerSchema);
module.exports = Manager;