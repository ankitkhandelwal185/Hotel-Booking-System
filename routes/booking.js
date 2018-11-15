const express = require('express')
const router = express.Router()
const Booking = require('../models/bookingSchema.js')

router.createRoom = function(req, res){
    let booking = new Booking({
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        purpose: req.body.purpose,
        room_id: req.body.room_id,
        user_id: req.body.user_id
    })
    booking.save(function(err, savedBooking){
        if(err)
            res.status(400).json(err)
        else if(!savedBooking)
            res.status(202).json("hotel not created")
        else
            res.status(201).json(savedBooking)
    })
}

router.fetchBooking = function(req, res){
    Booking.find({}).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

router.deleteRoom = function(req, res){
    Room.deleteOne({ "_id": req.params.id }).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

module.exports = router
