const express = require('express');
const router = express.Router();
const Slide = require('../models/Slide');
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

router.post('/addslide', (req, res) => {
        console.log(req.body, "reqbody for messages")
    //will need to put some validation in here and link in errors, and passport 

            const addSlide = new Slide({

                titleOne:req.body.titleOne,
                titleTwo:req.body.titleTwo,
                pageCat:req.body.pageCat,
                linkTitle:req.body.linkTitle,
                publish:req.body.publish,
                images:req.body.images
            })

            addSlide.save()
                .then(message => {
                    console.log(message, "message after model insert")
                   return res.json(message);

                })
                .catch(err => {
                return console.log(err)
                })
})

router.post('/deletemessage', (req, res) => {
   
    const id = req.body.id;
    Message.findOneAndDelete({_id:id})
        .then(message => {
       return res.status(200).json({message})
        })
        .catch(err => res.status(404)
    .json({noMessagefound: 'No Mesage found'}));
    })


router.get('/getSlides', (req,res) => {
    Slide.find()
    .limit(20)
    .sort({ createdAt: -1 })
    .then(mess => {
            console.log(mess)
            return res.json(mess);
        })
        .catch(err => res.json(err))
})


module.exports = router;