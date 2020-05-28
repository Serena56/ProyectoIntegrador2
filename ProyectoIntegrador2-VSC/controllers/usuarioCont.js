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

     let contraseñaEncriptada = bcryptjs.hashSync('req.body.userPassword',10)

     DB.Usuario.create({
            nombre_de_usuario: req.body.userName,
			email: req.body.userMail,
			password: contraseñaEncriptada,
			fecha_de_nacimiento: req.body.userBirthdate
        });
     

     res.redirect("/usuario/loggedIn");
},



homeLoggedIn: function (req, res) {
    res.render('HomeLoggedIn');
},
};

 
 module.exports = usuarioCont;  

