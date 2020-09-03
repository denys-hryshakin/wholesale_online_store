export { };
const mongoose = require('mongoose')

const DeliveryMethodSchema = mongoose.Schema({
    name: { type: String, required: true },
})

module.exports = mongoose.model('DeliveryMethod', DeliveryMethodSchema, 'deliveryMethod')