const express = require('express');
const router = express.Router();

const service = require('../services/users');

const private = require('../middlewares/private');

/* GET users listing. */
router.get('/:id', service.getById);
router.put('/add', service.add);
router.patch('/:id', service.update);
router.delete('/:id', service.delete);
router.post('/authenticate', service.authenticate);

module.exports = router;
