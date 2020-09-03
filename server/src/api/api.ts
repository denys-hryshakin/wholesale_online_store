export { };
const express = require('express')

const Delivery = require('./routes/Delivery.route')
const About = require('./routes/About.route')
const Contacts = require('./routes/Contacts.route')

const router = express.Router()

router.get('/', (_req: any, res: { json: (arg0: { message: string }) => void }) => {
    res.json({
        message: 'Welcome to the API!'
    })
})

router.use('/delivery', Delivery)
router.use('/about', About)
router.use('/contacts', Contacts)

module.exports = router