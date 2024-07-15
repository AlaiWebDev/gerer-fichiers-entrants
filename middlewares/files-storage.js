const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, callback) => {
        // Récupérer l'extension du fichier à partir du MIME_TYPE
        const extension = MIME_TYPES[file.mimetype];

        const date = new Date();
        
        // On récupère la date du jour
        const day = date.getDate();
        const month = date.getMonth() + 1; // Les mois vont de 0 à 11, donc +1
        const year = date.getFullYear();

        // Générer le nom de fichier avec l'extension
        const name = file.originalname.toLowerCase().split(' ').join('_');
        let formattedDate;
        // Opérateur ternaire utilisé pour initialiser formattedDate
        month < 10 ? formattedDate = `${day}-0${month}-${year}` : formattedDate = `${day}-${month}-${year}`
        callback(null, formattedDate + '_' + name);
    }
});

module.exports = { storage };
