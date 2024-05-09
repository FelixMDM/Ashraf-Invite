const express = require('express')
const router = express.Router()
const bcyrpt = require('bcrypt')
const Athlete = require('../models/athlete')

//get all
router.get('/', async (req, res) => {
    try {
        const athletes = await Athlete.find()
        res.json(athletes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//get one
router.get('/:email', getAthlete, (req, res) => {
    res.json(res.athlete)
})

//create one
router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcyrpt.hash(req.body.password, 10)
        const athlete = new Athlete({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        const newAthlete = await athlete.save()
        res.status(201).json(newAthlete)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//validate user login via post request
router.post('/login', async (req, res) => {
    try {
        const email = req.body.email
        const user = await Athlete.findOne({ email: email })

        if(user == null) { return res.status(400).send('Cannot find user') }

        if(await bcyrpt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not allowed')
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//update one
router.patch('/:email', getAthlete, async (req, res) => {
    if (req.body.name != null) {
        res.athlete.name = req.body.name
    }

    if (req.body.email != null) {
        res.athlete.email = req.body.email
    }

    try {
        const updatedAthlete = await res.athlete.save()
        res.json(updatedAthlete)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//delete one
router.delete('/:id', getAthlete,  async (req, res) => {
    try {
        await res.athlete.deleteOne()
        res.json({ message: "Deleted athlete" })
    } catch (err) {
        res.status(500).json({ mesage: err.message })
    }
})

///getter function user id
async function getAthlete(req, res, next) {
    let athlete
    try {
        athlete = await Athlete.findById(req.params.id)
        if (athlete == null) {
            return res.status(404).json({ message: "Cannot find athlete" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.athlete = athlete
    next()
}

module.exports = router