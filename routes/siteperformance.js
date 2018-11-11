const express = require('express');
const router = express.Router();
const Engagement = require('../models/Engagement');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

router.post('/engage', (req, res) => {

    //will need to put some validation in here and link in errors, and passport 
                console.log(req.body, "request at backend");
            const cat = new Engagement({
                    category:req.body.category,
                    score:req.body.score,
                    diffprev:req.body.diffprev,
                    diffparent:req.body.diffparent,
                    diffdwp:req.body.diffdwp
               })

                cat.save()
                .then(response => {
                    console.log(response, "message after model insert")
                   return res.json(response);

                })
                .catch(err => {
                return console.log(err)
                })
})

router.post('/engagecategory', (req, res) => {
    const id =  req.body.id;
    Engagement.findOneAndDelete({_id:id})
    .then(message => {
            return res.status(200).json({message})
             })
             .catch(err => res.status(404)
         .json({noMessagefound: 'No Mesage found'}));
         })
     

router.get('/engage', (req,res) => {
    Engagement.find({})
    .limit(12)
    .sort({ createdAt: -1 })
    .then(response => {
            console.log(response)
            return res.json(response);
        })
        .catch(err => res.json(err))
})


module.exports = router;