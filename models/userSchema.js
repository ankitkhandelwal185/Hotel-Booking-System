var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String }
    },
    email: { type: String,  match: /\S+@\S+\.\S+/ },
    contactNumber: { type: String, required: true },
    dateOfBirth: { type: Date },
    gender: { type: String },
    imageUrl: { type: String },
    password: { type: String }
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)
