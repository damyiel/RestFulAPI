const mongoose = require('mongoose')

const ToDoListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model('List', ToDoListSchema)