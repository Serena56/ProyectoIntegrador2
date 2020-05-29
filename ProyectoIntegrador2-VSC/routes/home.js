const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/homeCont.js');

// http://localhost:3000/home
router.get('/', controller.index);

// http://localhost:3000/home/busqueda
router.get('/busqueda', controller.busqueda);


module.exports = router;
