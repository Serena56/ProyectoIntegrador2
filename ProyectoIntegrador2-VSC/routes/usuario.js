const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/usuarioCont.js');

router.get('/', controller.index);

module.exports = router;
