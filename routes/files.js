const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../middlewares/files-storage');
const filesService = require('../services/files');

// Configuration de multer pour l'upload de fichiers
const upload = multer({ storage: storage });

// Route pour gérer l'upload de fichier
router.post('/', upload.single('upload_file'), filesService.createOneFile);

module.exports = router;