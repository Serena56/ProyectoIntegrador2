const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/peliculasCont.js');

// http://localhost:3000/peliculas/detalle
router.get('/detalle', controller.mostrarDetalle);


module.exports = router;
