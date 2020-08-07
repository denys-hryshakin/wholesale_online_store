export
const express = require('express')

const submenu = require('./routes/submenu.route')

const router = express.Router()

router.get('/', (_req: any, res: { json: (arg0: { message: string }) => void })=>{
    res.json({
        message: 'Welcome to the API!'
    })
})

router.use('/submenu', submenu)

module.exports = router