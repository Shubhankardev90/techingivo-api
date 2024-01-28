const mongoose = require('mongoose');

// Define the schema
const emailSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    sender_email: {
        type: String,
        required: true,
    },
    receiver_email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    sent: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

// Create the Mongoose model
const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
