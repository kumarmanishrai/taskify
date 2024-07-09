const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    name: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },

},
{
    timestamps: true,
})

module.exports = mongoose.model('usersCollection', UserSchema)