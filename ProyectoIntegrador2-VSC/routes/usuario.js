const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/usuarioCont.js');

// http://localhost:3000/usuario/logIn
router.get('/logIn', controller.logIn);

// http://localhost:3000/usuario/logIn
router.post('/logIn', controller.guardarUsuario);

// http://localhost:3000/usuario/loggedIn
router.get('/loggedIn', controller.homeLoggedIn);








module.exports = router;
