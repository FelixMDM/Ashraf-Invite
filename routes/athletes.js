const express = require('express')
const router = express.Router()
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
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//create one
router.post('/', async (req, res) => {
    const athlete = new Athlete({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newAthlete = await athlete.save()
        res.status(201).json(newAthlete)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//update one
router.patch('/', async (req, res) => {
    var updateObject = req.body;
    var id = req.params.id;
    db.users.update({_id : ObjectId(id)}, {$set: updateObject})
})

//delete one
router.delete('/:id', (req, res) => {

})

module.exports = router