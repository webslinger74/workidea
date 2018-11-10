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


router.get('/messages', (req,res) => {
                Manager.find()
                .limit(20)
                .sort({ createdAt: -1 })
                .then(mess => {
                        return res.json(mess);
                    })
                    .catch(err => res.json(err))
            })
            
router.post('/deletemessage', (req, res) => {
   
                const id = req.body.id;
                Manager.findOneAndDelete({_id:id})
                    .then(message => {
                   return res.status(200).json({message})
                    })
                    .catch(err => res.status(404)
                .json({noMessagefound: 'No Mesage found'}));
                })
            
        
module.exports = router;

