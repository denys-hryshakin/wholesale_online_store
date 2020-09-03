export { };
const mongoose = require('mongoose')

const DeliveryPaymentMethodSchema = mongoose.Schema({
    name: { type: String, required: true },
})

module.exports = mongoose.model('DeliveryPaymentMethod', DeliveryPaymentMethodSchema, 'deliveryPaymentMethod')