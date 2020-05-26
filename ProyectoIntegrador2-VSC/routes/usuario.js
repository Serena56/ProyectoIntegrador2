const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/usuarioCont.js');

// http://localhost:3000/usuario/home
router.get('/home', controller.homeLoggedIn);
//  falta lo del loggedIn que va aca

module.exports = router;
