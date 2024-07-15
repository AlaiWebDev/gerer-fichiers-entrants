const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser: true,
    dbName: 'apinode'
};

exports.initClientConnection = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO, clientOptions);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
};