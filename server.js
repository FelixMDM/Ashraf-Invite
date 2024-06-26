require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error => console.error(error)))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const athleteRouters = require('./routes/athletes.js')
app.use('/athletes', athleteRouters)

app.listen(3000, () => console.log('Server Started'))