var mongoose = require('mongoose')
var Schema = mongoose.Schema

var bookingSchema = new Schema({
    start_date: Date,
    end_date: Date,
    duration: Number,
    purpose: { type: String, required: true },
    room_id: { type: Schema.ObjectId, ref: 'Room' },
    user_id: { type: Schema.ObjectId, ref: 'User' },
    status: { type: Number, default: 1 }, //1->confirmed 2->cancelled 3->completed
}, {
    timestamps: true
})

bookingSchema.index({ "room_id": 1, "user_id": 1 });

module.exports = mongoose.model('Booking', bookingSchema)
