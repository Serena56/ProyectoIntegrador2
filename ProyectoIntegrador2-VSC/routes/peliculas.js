const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/peliculasCont.js');

// http://localhost:3000/home/detalle
router.get('/detalle', controller.detallePelicula);


module.exports = router;
