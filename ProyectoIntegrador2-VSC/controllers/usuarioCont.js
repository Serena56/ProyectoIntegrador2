const DB = require('../database/models');
const OP = DB.Sequelize.Op;
const bcrypt = require('bcryptjs');
const moduloLogin = require('../modulo-login');



const usuarioCont = {

    logIn: function (req, res) {
        res.render('logIn');
    },

 guardarUsuario: function (req, res) {

    const usuario = {
        nombre_de_usuario: req.body.userName,
        email: req.body.userMail,
        password: req.body.userPassword,
        fecha_de_nacimiento: req.body.userBirthdate,
     }

     let contraseñaEncriptada = bcrypt.hashSync('req.body.userPassword',10);

     DB.Usuarios.create({
            nombre_de_usuario: usuario.nombre_de_usuario,
			email: usuario.email,
			password: contraseñaEncriptada,
			fecha_de_nacimiento: usuario.fecha_de_nacimiento,
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

signIn: function (req, res) {
    res.render('signIn');
},

confirmarUsuario: function (req, res){
    moduloLogin.validar(req.body.userMail, req.body.userPassword)
    .then(resultado => {
        if(resultado == undefined) {
            // res.send("da undefined")
            res.redirect('/usuario/logIn')
        } else {
            // res.send(resultado.userMail)
            res.redirect('/usuario/home')
        }
    })
}, 
mostrarBuscarUsuario: function (req, res) {
    res.render('buscarUsuario');
},

resultadoBusquedaUsuario: function (req, res) {
    res.render('resultadoBusquedaUsuario');
},


buscarUsuarioFunction: function (req, res) {

    DB.Usuarios.findAll({
        include: [
            { association: "resenas" },
        ],
        where: {
            [OP.or]: {
                email: {[OP.like]: "%" + req.query.usuarioBuscado + "%"},
                nombre_de_usuario: {[OP.like]: "%" + req.query.usuarioBuscado + "%"}
                }
        }
})
.then(function(resultado) {
      res.render('resultadoBusquedaUsuario', {
        usuario: resultado,
        })

    })
},


mostrarDetalleUsuario: function (req, res) {
    DB.Usuarios
    .findAll(
        { where: { 
            id: req.params.id
         },

         include: { association: 'resenas' }
        
        })
   
    .then(results => { 
        return res.render('detalleUsuario', { 
            elUsuarioSeleccionado: results[0] });
  })
  .catch(error => { 
      return res.send("error:" + error)
});
},



};

 
 module.exports = usuarioCont;  

