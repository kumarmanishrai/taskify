const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema ({
    note: {
        type: String,
        unique: false,
        required: true
    }
})

module.exports = mongoose.model('todosCollection', TodoSchema)