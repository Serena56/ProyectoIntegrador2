const express = require('express');
const router = express.Router();

// Controlador
const controller = require('../controllers/usuarioCont.js');

// http://localhost:3000/usuario/logIn
router.get('/logIn', controller.logIn);

// http://localhost:3000/usuario/logIn
router.post('/logIn', controller.guardarUsuario);

// http://localhost:3000/usuario/signIn
router.get('/signIn', controller.signIn);

// http://localhost:3000/usuario/signIn
router.post('/signIn', controller.confirmarUsuario);

// http://localhost:3000/usuario/home
router.get('/home', controller.homeLoggedIn);

// http://localhost:3000/usuario/generos
router.get('/generos', controller.mostrarGeneros);

// http://localhost:3000/usuario/peliculasPorGenero
router.get('/peliculasPorGenero', controller.mostrarPelisPorGenero);

// http://localhost:3000/usuario/busqueda
router.get('/busqueda', controller.mostrarBusqueda);

// http://localhost:3000/usuario/detalle
router.get('/detalle', controller.detallePelicula);

// http://localhost:3000/usuario/favoritos
router.get('/favoritos', controller.mostrarFavoritos);

// http://localhost:3000/usuario/buscarUsuario
router.get('/buscarUsuario', controller.mostrarBuscarUsuario);

// http://localhost:3000/usuario/buscarUsuario
router.get('/resultadoBusquedaUsuario', controller.buscarUsuarioFunction);

// http://localhost:3000/usuario/resultadoBusquedaUsuario
router.get('/resultadoBusquedaUsuario', controller.resultadoBusquedaUsuario);

// http://localhost:3000/usuario/detalleUsuario
router.get('/detalleUsuario/:id', controller.mostrarDetalleUsuario);

// // http://localhost:3000/usuario/crearReview
// router.get('/crearReview', controller.mostrarCrearReview);

// // http://localhost:3000/usuario/crearReview
// router.post('/crearReview', controller.crearReview);

// // http://localhost:3000/usuario/detalle
// router.post('/detalle', controller.crearReview);

// // http://localhost:3000/usuario/creaResena
// router.post('/creaResena', controller.creaResena);

// http://localhost:3000/usuario/misReviews
router.get('/misReviews', controller.misReviews);





module.exports = router;
