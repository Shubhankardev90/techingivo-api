const mongoose = require('mongoose');

// Replace the connection string with your MongoDB Atlas connection string

const connectDB = (uri) => {
    // Connect to MongoDB Atlas using Mongoose
    mongoose.connect(uri, {});

    // Get the default connection
    const db = mongoose.connection;

    // Event listeners for connection events
    db.on('error', console.error.bind(console, 'Connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB Atlas');
        // Perform your MongoDB operations here
    });

    // Event listener for disconnection event
    db.on('disconnected', () => {
        console.log('Disconnected from MongoDB Atlas');
    });

    // Gracefully close the Mongoose connection on process termination
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Connection to MongoDB Atlas closed due to application termination');
            process.exit(0);
        });
    });

}

module.exports=connectDB