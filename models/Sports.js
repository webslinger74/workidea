const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SportsSchema = new Schema({
    number: {
        type:Number,
        required:true,
        unique: 1,
        maxlength:99
    }
},{timestamps:true});

const Sports = mongoose.model('sports', SportsSchema);
module.exports = Sports;