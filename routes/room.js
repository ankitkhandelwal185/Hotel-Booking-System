const express = require('express')
const mongoose = require('mongoose')
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

//fetch rooms of a hotel with their bookings
router.fetchRoom = function(req, res){
    Room.aggregate([
        { $match: { hotel_id: new mongoose.Types.ObjectId(req.params.hotel_id) }},
        { $lookup:{
            from: 'bookings',
            localField: '_id',
            foreignField: 'room_id',
            as: 'bookingData'
        }},
        { $project: {
            'name':1, 'floor':1, 'capacity':1, 'price':1, 'hotel_id':1,
            'bookingData.start_date':1, 'bookingData.end_date':1, 'bookingData.status':1
        }}
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
    Room.deleteOne({ "_id": req.params.room_id }).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

module.exports = router
