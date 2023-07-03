const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    image: [{type: String}],
    date: Date,
    topic: String,
    tags: String,
    title: String,
    author: String,
    body: String,
    summary: String,
    link: String,
})

module.exports = mongoose.model('Post', workoutSchema)