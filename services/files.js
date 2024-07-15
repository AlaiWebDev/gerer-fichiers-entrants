const File = require('../models/file');

exports.createOneFile = (req, res, next) => {
    const file = new File({
        name: req.file.filename,
        description: req.body.description,
        fileUrl: `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`,
        userId: req.body.userId
    });

    file.save()
        .then(() => {
            res.status(201).json({ message: 'Fichier enregistré avec succès !' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};
