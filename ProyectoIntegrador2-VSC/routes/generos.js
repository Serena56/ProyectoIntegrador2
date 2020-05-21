const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/generosCont.js');

router.get('/', controller.listadoDeGeneros);

module.exports = router;
