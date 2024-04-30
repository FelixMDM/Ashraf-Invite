const mongoose = require('mongoose')

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const athleteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: [true, 'Email required'],   
        validate: [
            {
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
                message: props => 'Email has already been taken.'
            }, 
            {
                validator: validateEmail, msg: 'Please enter a valid email'
            },
        ]
    }, 
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Athlete', athleteSchema)