const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema ({
    user: {   
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'usersCollection',
    },
    heading: {
        type: String,
        unique: false,
        required: true
    },
    note: {
        type: String,
        unique: false,
        required: true
    },
    currStatus: {
        type: String,
        unique: false,
        required: true
    },

})

module.exports = mongoose.model('todosCollection', TodoSchema)