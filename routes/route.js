var express = require('express')
var router = express.Router()
var hotel = require('./hotel.js')
var user = require('./user.js')
var room = require('./room.js')
var booking = require('./booking.js')


router.post('/create/hotel', hotel.createHotel)
// router.put('/update/hotel', hotel.updateHotel)
// router.delete('/delete/hotel', hotel.deleteHotel)

router.post('/create/user', user.createUser)
// router.put('/update/user', user.updateUser)
// router.delete('/delete/user', user.deleteUser)

router.post('/create/room', room.createRoom)
// router.put('/update/room', room.updateRoom)
router.delete('/delete/room/:id', room.deleteRoom)

//router.post('/book/room', room.bookRoom)

router.get('/fetch/hotel', hotel.fetchHotel)
router.get('/fetch/room', room.fetchRoom)
module.exports = router
