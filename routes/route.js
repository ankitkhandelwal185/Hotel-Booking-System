var express = require('express')
var router = express.Router()
var hotel = require('./hotel.js')
var user = require('./user.js')
var room = require('./room.js')
var booking = require('./booking.js')


router.post('/create/hotel', hotel.createHotel)
router.patch('/update/hotel', hotel.updateHotel)
router.delete('/delete/hotel/:hotel_id', hotel.deleteHotel)

router.post('/create/user', user.createUser)
router.patch('/update/user', user.updateUser)
router.delete('/delete/user/:user_id', user.deleteUser)

router.post('/create/room', room.createRoom)
// router.put('/update/room', room.updateRoom)
router.delete('/delete/room/:id', room.deleteRoom)

router.post('/book/room', booking.createBooking)
router.get('/fetch/booking/:user_id', booking.fetchBooking)

router.get('/fetch/hotel', hotel.fetchHotel)
router.get('/fetch/room/:hotel_id', room.fetchRoom)
router.get('/fetch/user', user.fetchUser)
module.exports = router
