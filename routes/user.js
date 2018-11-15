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
        gender: req.body.gender,
        password: req.body.password
    })
    user.save(function(err, savedUser){
        if(err)
            res.status(400).json(err)
        else if(!savedHotel)
            res.status(202).json("hotel not created")
        else
            res.status(201).json(savedUser)
    })
}

router.fetchUser = function(req, res){
    User.find({"email": req.body.email}).exec(function(err, userData){
        if(err)
            res.status(400).json(err)
        else if(!hotelData)
            res.status(202).json("no data found")
        else
            res.status(200).json(userData)
    })
}

module.exports = router
