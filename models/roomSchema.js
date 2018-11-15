var mongoose = require('mongoose')
var Schema = mongoose.Schema

var roomSchema = new Schema({
    name: { type: String, required: true },
    floor: { type: String, required: true },
    capacity: { type: Number },
    status: { type: Number, default: 0 }, //0->available, 1->booked
    price: { type: Number },
    hotel_id: { type: Schema.Types.ObjectId },
}, {
    timestamps: true
})

roomSchema.index({ "hotel_id": 1, "name": 1 }, { "unique": true });

module.exports = mongoose.model('Room', roomSchema)
