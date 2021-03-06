const express = require('express');
const router = express.Router();
const Message = require('../models/Messages');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
const mongoose = require('mongoose');
//load input validation
const validateMessageInput = require('../validation/messages');
const cloudinary = require('cloudinary');

router.post('/message', (req, res) => {
     //   console.log(req.body, "reqbody for messages")
    //will need to put some validation in here and link in errors, and passport 
    const { errors, isValid } = validateMessageInput(req.body);
    if (!isValid) {
       return res.status(400).json(errors);
      
   }

            const insertMessage = new Message({
                    title:req.body.title,
                    message:req.body.message,
                    author:req.body.author,
                    publish:req.body.publish,
                    images:req.body.images
            })

            insertMessage.save()
                .then(message => {
                //    console.log(message, "message after model insert")
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


router.get('/messages', (req,res) => {
    Message.find()
    .limit(20)
    .sort({ createdAt: -1 })
    .then(mess => {
        //    console.log(mess)
            return res.json(mess);
        })
        .catch(err => res.json(err))
})

router.post('/messagesByDate', (req,res) => {
    let slicedTime = req.body.searchdate;

    const startSearch = new Date(parseInt(slicedTime.slice(0,4)), parseInt(slicedTime.slice(5,7))-1, parseInt(slicedTime.slice(8,10)));
    const endSearch = new Date(parseInt(slicedTime.slice(0,4)), parseInt(slicedTime.slice(5,7))-1, parseInt(slicedTime.slice(8,10))+1);
  
      Message.find({"createdAt": {"$gte": startSearch, "$lt": endSearch}})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(mess => {
        if(mess.length === 0){
            return res.json([{message:"There are no messages for this Date",
            _id:"1",
             title:"No Messages"}])
}
        
            return res.json(mess);
        })
        .catch(err => res.json(err))
})

router.post('/messagesBySearch', (req,res) => {
    let searchString = req.body.searchString;
  
      Message.find({"author": searchString})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(mess => {
        if(mess.length === 0){
            return res.json([{message:"There are no messages from this Person/Team",
                            _id:"1",
                             title:"No Messages"}])
        }
            return res.json(mess);
        })
        .catch(err => res.json(err))
})


module.exports = router;