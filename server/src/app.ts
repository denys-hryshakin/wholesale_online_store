const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const morgan = require('morgan')

require('dotenv').config()

const middlewares = require('./middlewares');
const api = require('./api/api')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('dev'))

app.get('/', (_req: any, res: any) => {
    res.json({
        message: 'Hello!🦄🌈✨👋🌎🌍🌏✨🌈🦄'
    })
})

app.use('/api/v1', api)

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app