export { };
const express = require('express')

const Delivery = require('./routes/Delivery.route')

const router = express.Router()

router.get('/', (_req: any, res: { json: (arg0: { message: string }) => void }) => {
    res.json({
        message: 'Welcome to the API!'
    })
})

router.use('/delivery', Delivery)

module.exports = router