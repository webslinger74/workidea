const express = require('express');
const router = express.Router();
const Sports = require('../models/Sports');
const SSocial = require('../models/SSocial');
const SiteEmail = require('../models/SiteEmail');
const Party = require('../models/Party');
const Celebration = require('../models/Celebration');
const CharityConts = require('../models/CharityConts');
const SportsContact = require('../models/SportsContact');
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
                 //   console.log(number, "bingo number after model insert")
                   return res.json(number);

                })
                .catch(err => {
                return console.log(err)
                })
            })


router.get('/bingo', (req,res) => {
                Sports.find({})
                .then(numbers => {
                  //      console.log(numbers, "the numbers in routes")
                        return res.json(numbers);
                    })
                    .catch(err => res.json(err))
            })
            

router.post('/event', (req,res) => {
    const insertEvent = new SSocial({
        title:req.body.title,
        message:req.body.message,
        author:req.body.author,
        publish:req.body.publish,
        images:req.body.images
})

insertEvent.save()
    .then(event => {
    //    console.log(event, "event details after model insert")
       return res.json(event);

    })
    .catch(err => {
    return console.log(err)
    })
})




router.post('/christmasparty', (req,res) => {
    const insertEvent = new Party({
        title:req.body.title,
        message:req.body.message,
        author:req.body.author,
        publish:req.body.publish,
        images:req.body.images
})

insertEvent.save()
    .then(event => {
     //   console.log(event, "event details after model insert")
       return res.json(event);

    })
    .catch(err => {
    return console.log(err)
    })
})

router.post('/celebrationday', (req,res) => {
    const insertEvent = new Celebration({
        title:req.body.title,
        message:req.body.message,
        author:req.body.author,
        publish:req.body.publish,
        images:req.body.images
})

insertEvent.save()
    .then(event => {
    //    console.log(event, "event details after model insert")
       return res.json(event);

    })
    .catch(err => {
    return console.log(err)
    })
})

router.get('/celebrationday', (req,res) => {
    Celebration.find({})
    .limit(1)
    .sort({ createdAt: -1 })
    .then(event => {
       //     console.log(event)
            return res.json(event);
        })
        .catch(err => res.json(err))
})

router.get('/christmasparty', (req,res) => {
    Party.find({})
    .limit(1)
    .sort({ createdAt: -1 })
    .then(event => {
       //     console.log(event)
            return res.json(event);
        })
        .catch(err => res.json(err))
})

router.post('/delchristmasparty', (req, res) => {
   
    const id = req.body.id;

    Party.findOneAndDelete({_id:id})
        .then(message => {
       return res.status(200).json({message})
        })
        .catch(err => res.status(404)
    .json({noMessagefound: 'No Mesage found'}));
    })
    router.post('/delcelebrationday', (req, res) => {
   
        const id = req.body.id;
    
        Celebration.findOneAndDelete({_id:id})
            .then(message => {
           return res.status(200).json({message})
            })
            .catch(err => res.status(404)
        .json({noMessagefound: 'No Mesage found'}));
        })

router.get('/events', (req,res) => {
    SSocial.find({})
    .limit(10)
    .sort({ createdAt: -1 })
    .then(event => {
     //       console.log(event)
            return res.json(event);
        })
        .catch(err => res.json(err))
})


router.post('/deleteEvent', (req, res) => {
   
    const id = req.body.id;

    SSocial.findOneAndDelete({_id:id})
        .then(message => {
   // console.log(message, "this is themessageleted???");
       return res.status(200).json({message})
        })
        .catch(err => res.status(404)
    .json({noMessagefound: 'No Mesage found'}));
    })

    router.post('/charity', (req, res) => {
    
        const insertCharity = new CharityConts({
            charity:req.body.charityName,
            amount:req.body.amount,
            images:req.body.images
    })
    
    insertCharity.save()
        .then(event => {
       //     console.log(event, "event details after model insert")
           return res.json(event);
    
        })
        .catch(err => {
        return console.log(err)
        })
    }) 
    
    router.get('/charity', (req,res) => {
        CharityConts.find({})
        .limit(20)
        .sort({ createdAt: -1 })
        .then(event => {
           //     console.log(event)
                return res.json(event);
            })
            .catch(err => res.json(err))
    })

    router.post('/deleteCharity', (req, res) => {
   
        const id = req.body.id;
    
        CharityConts.findOneAndDelete({_id:id})
            .then(message => {
       // console.log(message, "this is themessageleted???");
           return res.status(200).json({message})
            })
            .catch(err => res.status(404)
        .json({noMessagefound: 'No Mesage found'}));
        })


        router.post('/siteEmail', (req, res) => {
    
            const insertEmail = new SiteEmail({
                siteEmail:req.body.sportsEmail
        })
        
        insertEmail.save()
            .then(event => {
            //    console.log(event, "site email details after model insert")
               return res.json(event);
        
            })
            .catch(err => {
            return console.log(err)
            })
        }) 

        router.post('/deleteSiteEmail', (req, res) => {
   
            const id = req.body.id;
        
            SiteEmail.findOneAndDelete({_id:id})
                .then(message => {
           // console.log(message, "this is themessageleted???");
               return res.status(200).json({message})
                })
                .catch(err => res.status(404)
            .json({noMessagefound: 'No Mesage found'}));
            })

        router.get('/siteEmail', (req,res) => {
            SiteEmail.find({})
            .limit(1)
            .sort({ createdAt: -1 })
            .then(event => {
             //       console.log(event)
                    return res.json(event);
                })
                .catch(err => res.json(err))
        })

        router.post('/contact', (req, res) => {
    
            const insertContact = new SportsContact({
                contactName:req.body.contactName,
                contactEmail:req.body.contactEmail,
                position:req.body.position,
                images:req.body.images
        })
        
        insertContact.save()
            .then(event => {
          //      console.log(event, "site email details after model insert")
               return res.json(event);
        
            })
            .catch(err => {
            return console.log(err)
            })
        }) 

        
    router.post('/deleteContact', (req, res) => {
   
        const id = req.body.id;
    
        SportsContact.findOneAndDelete({_id:id})
            .then(message => {
       // console.log(message, "this is themessageleted???");
           return res.status(200).json({message})
            })
            .catch(err => res.status(404)
        .json({noMessagefound: 'No Mesage found'}));
        })


        router.get('/contacts', (req,res) => {
            SportsContact.find({})
            .limit(20)
            .sort({ createdAt: -1 })
            .then(event => {
               //     console.log(event)
                    return res.json(event);
                })
                .catch(err => res.json(err))
        })

module.exports = router;

