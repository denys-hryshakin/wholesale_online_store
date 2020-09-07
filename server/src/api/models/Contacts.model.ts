export { };
const mongoose = require('mongoose')

const ContactsSchema = mongoose.Schema({
    companyName: { type: String, required: true },
    personName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    site: { type: String, required: true },
})

module.exports = mongoose.model('Contacts', ContactsSchema, 'contacts')