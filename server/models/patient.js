const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    illness: {
        type: String
    },
    levelOfPain: {
        type: Number
    },
    hospitalName: {
        type: String,
    },    
    waitingTime: {
        type: Number,
    }
});

module.exports = mongoose.model('Patient', patientSchema);