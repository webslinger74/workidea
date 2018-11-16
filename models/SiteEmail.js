const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SiteEmailSchema = new Schema({
    siteEmail: {
        type:String,
        required:true,
        unique: 1,
        maxlength:99
    }
},{timestamps:true});

const SiteEmail = mongoose.model('siteemail', SiteEmailSchema);
module.exports = SiteEmail;