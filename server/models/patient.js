const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    illnessName: {
        type: String
    },
    hospitalName: {
        type: String
    },
    hospitalAvgProcessTime: {
        type: Number,
    },    
    hospitalWaitingList: {
        type: Number,
    },
    hospitalWaitingTime: {
        type: Number,
    },
    levelOfPain: {
        type: String,
    }
});

module.exports = mongoose.model('Patient', patientSchema);