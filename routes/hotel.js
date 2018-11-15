const express = require('express')
const router = express.Router()
const Hotel = require('../models/hotelSchema.js')

router.createHotel = function(req, res){
    let hotel = new Hotel({
        name: req.body.name,
        code: req.body.code,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pincode,
        imageUrl: req.body.imageUrl,
        rating: req.body.rating
    })
    hotel.save(function(err, savedHotel){
        if(err)
            res.status(400).json(err)
        else if(!savedHotel)
            res.status(202).json("hotel not created")
        else
            res.status(201).json(savedHotel)
    })
}

router.updateHotel = function(req, res){
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

router.deleteHotel = function(req, res){
    User.deleteOne({"_id":req.params.hotel_id}).exec(function(err, userData){
        if(err)
            res.status(400).json(err)
        else
            res.status(200).json(userData)
    })
}

router.fetchHotel = function(req, res){
    Hotel.find({}).exec(function(err, hotelData){
        if(err)
            res.status(400).json(err)
        else if(!hotelData)
            res.status(202).json("no data found")
        else
            res.status(200).json(hotelData)
    })
}

module.exports = router
