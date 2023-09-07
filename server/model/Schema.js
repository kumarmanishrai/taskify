const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema ({
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