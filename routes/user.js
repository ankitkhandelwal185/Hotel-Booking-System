const express = require('express')
const router = express.Router()
const User = require('../models/userSchema.js')

router.createUser = function(req, res){
    let user = new User({
        name: {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
        },
        email: req.body.email,
        mobile: req.body.mobile,
        dateOfBirth: req.body.dateOfBirth,
        imageUrl: req.body.imageUrl,
        gender: req.body.gender
    })
    user.save(function(err, savedUser){
        if(err)
            res.status(400).json(err)
        else if(!savedUser)
            res.status(202).json("hotel not created")
        else
            res.status(201).json(savedUser)
    })
}

router.updateUser = function(req, res){
    Hotel.updateOne(
        { "_id" : req.body._id },
        { $set: req.body }
    ).exec(function(err, hotelData){
        if(err)
            res.status(400).json(err)
        else
            res.status(200).json(hotelData)
    })
}

router.fetchUser = function(req, res){
    User.find({}).exec(function(err, userData){
        if(err)
            res.status(400).json(err)
        else if(!userData)
            res.status(202).json("no data found")
        else
            res.status(200).json(userData)
    })
}

router.deleteUser = function(req, res){
    console.log(req.params.user_id)
    User.deleteOne({"_id":req.params.user_id}).exec(function(err, userData){
        if(err)
            res.status(400).json(err)
        else
            res.status(200).json(userData)
    })
}

module.exports = router
