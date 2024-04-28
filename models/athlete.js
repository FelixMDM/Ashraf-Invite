const mongoose = require('mongoose')

const athleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        validate: {
            validator: async function(email) {
                const user = await this.constructor.findOne({email})
                if(user) {
                    if(this.id === user.id) {
                        return true
                    }
                    return false
                }
                return true
            },
            message: props => 'Email has already been taken.',
        },
        required: [true, 'Email required']    
    }, 

    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Athlete', athleteSchema)