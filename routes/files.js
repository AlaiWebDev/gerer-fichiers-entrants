const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../middlewares/files-storage');
const filesService = require('../services/files');
const File = require('../models/file'); 
const { checkJWT } = require('../middlewares/private');

// Configuration de multer pour l'upload de fichiers
const upload = multer({ storage: storage });

// Route pour gérer l'upload de fichier
router.post('/', upload.single('upload_file'), filesService.createOneFile);
// Route pour récupérer tous les fichiers
router.get('/', checkJWT, async (req, res) => {
    try {
        const files = await File.find();
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;