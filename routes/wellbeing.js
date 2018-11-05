const express = require('express');
const router = express.Router();
const WellBeing = require('../models/WellBeing');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

           

router.post('/event', (req,res) => {
    const insertEvent = new WellBeing({
        title:req.body.title,
        message:req.body.message,
        author:req.body.author,
        publish:req.body.publish,
        images:req.body.images
})

insertEvent.save()
    .then(event => {
        console.log(event, "event details after model insert")
       return res.json(event);

    })
    .catch(err => {
    return console.log(err)
    })
})
router.get('/events', (req,res) => {
    WellBeing.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(event => {
            console.log(event)
            return res.json(event);
        })
        .catch(err => res.json(err))
})
        

module.exports = router;

