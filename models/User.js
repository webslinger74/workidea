const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    staffnumber: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: Number,
        default:1    // user 1 is for admin-person
    },
    token: {
        type:String
    }
});
const User = mongoose.model('users', UserSchema);
module.exports = User;