const mongoose = require('mongoose');

const clientOptions = {
    useNewUrlParser: true,
    dbName: 'apinode'
};

exports.initClientConnection = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO, clientOptions);
        console.log('Connexion MongoDB effectuée');
    } catch (error) {
        console.error('Erreur de connexion MongoDB :', error);
        throw error;
    }
};