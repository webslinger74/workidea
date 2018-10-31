const express = require('express');
const router = express.Router();
const Manager = require('../models/Manager');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

router.post('/message', (req, res) => {
            const insertMessage = new Manager({
                    title:req.body.title,
                    message:req.body.message,
                    author:req.body.author,
                    publish:req.body.publish,
                    images:req.body.images
            })

            insertMessage.save()
                .then(message => {
                    console.log(message, "message after model insert")
                   return res.json(message);

                })
                .catch(err => {
                return console.log(err)
                })
            })


module.exports = router;

