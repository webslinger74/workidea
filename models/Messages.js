const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MessageSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique: 1,
        maxlength:2000
    },
    description: {
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
        type: Boolean
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const Message = mongoose.model('messages', MessageSchema);
module.exports = Message;