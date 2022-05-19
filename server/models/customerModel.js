const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    NIC: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('customers', customerSchema);