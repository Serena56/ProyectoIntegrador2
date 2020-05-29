const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcryptjs = require('bcryptjs');

const usuarioCont = {
    logIn: function (req, res) {
        res.render('logIn');
 },

 guardarUsuario: function (req, res) {

    const usuario = {
        nombre: req.body.userName,
        email: req.body.userMail,
        contraseña: req.body.userPassword,
        fechaDeNacimiento: req.body.userBirthdate,
     }

     let contraseñaEncriptada = bcryptjs.hashSync('req.body.userPassword',10);

     DB.Usuario.create({
            nombre_de_usuario: req.body.userName,
			email: req.body.userMail,
			password: contraseñaEncriptada,
			fecha_de_nacimiento: req.body.userBirthdate,
        });
     

     res.redirect("/usuario/home");
},



homeLoggedIn: function (req, res) {
    res.render('HomeLoggedIn');
},

mostrarGeneros: function (req, res) {
    res.render('pagina2LoggedIn');
},

mostrarPelisPorGenero: function (req, res) {
    res.render('pagina3LoggedIn');
},

mostrarBusqueda: function (req, res) {
    res.render('pagina4LoggedIn');
},

mostrarDetalle: function (req, res) {
    res.render('pagina5LoggedIn');
},

mostrarFavoritos: function (req, res) {
    res.render('pagina6');
},

};

 
 module.exports = usuarioCont;  

