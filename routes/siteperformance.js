const express = require('express');
const router = express.Router();
const Engagementcat = require('../models/Engagement');
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

router.post('/engagementCat', (req, res) => {

    //will need to put some validation in here and link in errors, and passport 
                console.log(req.body, "request at backend");
            const insertEngCat = new Engagementcat({
                    category:req.body.category,
                    score:req.body.score,
                    diffPrev:req.body.diffPrev,
                    diffParent:req.body.diffParent,
                    diffDWP:req.body.diffDWP
            })

            insertEngCat.save()
                .then(categoryDets => {
                    console.log(categoryDets, "message after model insert")
                   return res.json(categoryDets);

                })
                .catch(err => {
                return console.log(err)
                })
})

router.get('/engagementCat', (req,res) => {
    EngagementCatScore.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(categoryDets => {
            console.log(categoryDets)
            return res.json(categoryDets);
        })
        .catch(err => res.json(err))
})


module.exports = router;