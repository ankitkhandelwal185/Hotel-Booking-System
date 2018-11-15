const express = require('express')
const router = express.Router()
const Room = require('../models/roomSchema.js')

router.createRoom = function(req, res){
    let room = new Room({
        name: req.body.room_name,
        floor: req.body.floor,
        capacity: req.body.capacity,
        price: req.body.price,
        hotel_id: req.body.hotel_id
    })
    room.save(function(err, savedRoom){
        if(err)
            res.status(400).json(err)
        else if(!savedRoom)
            res.status(202).json("hotel not created")
        else
            res.status(201).json(savedRoom)
    })
}

router.fetchRoom = function(req, res){
    Room.find({ hotel_id: req.body.hotel_id }).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

router.fetchRoom = function(req, res){
    Booking.aggregate([
        
    ]).exec(function(err, roomData){
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
