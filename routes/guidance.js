const express = require('express');
const router = express.Router();
const Guidance = require('../models/Guidance');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

           

router.post('/addguidance', (req,res) => {
 //   console.log(req.body, "request")
    const insertGuidance = new Guidance({
        title:req.body.title,
        message:req.body.message,
        author:req.body.author,
        publish:req.body.publish,
        images:req.body.images
})

insertGuidance.save()
    .then(event => {
    ////    console.log(event, "event details after model insert")
       return res.json(event);

    })
    .catch(err => {
    return console.log(err)
    })
})

router.get('/getguidance', (req,res) => {
 //   console.log(req.body, "request")
    Guidance.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(event => {
          //  console.log(event)
            return res.json(event);
        })
        .catch(err => res.json(err))
})
        
router.post('/deleteguidance', (req, res) => {
   
    const id = req.body.id;

    Guidance.findOneAndDelete({_id:id})
        .then(message => {
   
       return res.status(200).json({message})
        })
        .catch(err => res.status(404)
    .json({noMessagefound: 'No Mesage found'}));
    })

module.exports = router;

