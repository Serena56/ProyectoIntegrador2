const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/peliculasCont.js');

router.get('/', controller.index);

module.exports = router;
