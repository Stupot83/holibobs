const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.index({
    name: 1,
    email: 1,
}, 
{
    unique: true
});

module.exports = User = mongoose.model('users', userSchema);