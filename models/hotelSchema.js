var mongoose = require('mongoose')
var Schema = mongoose.Schema

var hotelSchema = new Schema({
    name: { type: String, required : true },
    code: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
    imageUrl: { type: String },
    rating: { type: Number },
}, {
    timestamps: true
})

hotelSchema.index({ "code": 1 }, { "unique": true });

module.exports = mongoose.model('Hotel', hotelSchema)
