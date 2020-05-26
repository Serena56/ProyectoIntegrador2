const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/generosCont.js');

// http://localhost:3000/generos
router.get('/', controller.mostrarGeneros);

// http://localhost:3000/generos/peliculasPorGenero
router.get('/peliculasPorGenero', controller.peliculasPorGenero);

module.exports = router;
