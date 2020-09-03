export { };
const mongoose = require('mongoose')

const DeliveryRegionsSchema = mongoose.Schema({
    name: { type: String, required: true },
    // cities: {
    //     type: Array,
    //     required: false,
    //     _id: { type: mongoose.Types.ObjectId },
    //     name: { type: String }
    // }
})

module.exports = mongoose.model('DeliveryRegions', DeliveryRegionsSchema, 'deliveryRegions')