const mongoose = require('mongoose')

// post schema
const postSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        require: true
    },
    postImg: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model('Post', postSchema)