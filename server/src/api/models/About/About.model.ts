export { };
const mongoose = require('mongoose')

const AboutSchema = mongoose.Schema({
    text: { type: String, required: true },
})

module.exports = mongoose.model('About', AboutSchema, 'about')