const express = require('express');
const router = express.Router();
const Sports = require('../models/Manager');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

router.post('/bingo', (req, res) => {
            const insertNumber = new Sports({
                    number:req.body.number
            })

            insertNumber.save()
                .then(number => {
                    console.log(number, "bingo number after model insert")
                   return res.json(message);

                })
                .catch(err => {
                return console.log(err)
                })
            })


router.get('/bingo', (req,res) => {
                Bingo.find()
                .sort({ createdAt: -1 })
                .then(numbers => {
                        console.log(mess)
                        return res.json(numbers);
                    })
                    .catch(err => res.json(err))
            })
            


        

module.exports = router;

