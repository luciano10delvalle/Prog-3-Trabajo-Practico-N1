const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fecha: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('user', userSchema);