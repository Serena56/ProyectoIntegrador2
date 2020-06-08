const DB = require('../database/models');
const OP = DB.Sequelize.Op;
let bcrypt = require('bcryptjs');
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

     DB.usuario.create({
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


detallePelicula: (req, res) => {
    DB.Resenas
    .findAll ({
        where: [
           { id_pelicula: req.query.idPelicula }
        ], 
        include: ['usuario']
    }) 
    .then(resenas => {
        return res.render('pagina5LoggedIn', {
            resenaPelicula: resenas,
            idPelicula: req.query.idPelicula
        });
    }) 
    .catch(error => {
        res.send (error)
    })
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

    DB.usuario.findAll({
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
    DB.usuario
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

logUser: function (req,res) {
    res.render('loginReview', { tipo: "log"});
},

confirmUser: function (req, res) {
    moduloLogin.validar(req.body.email, req.body.password)
    .then(resultado =>{
       //res.send(resultado);
        if(resultado == undefined){
            res.redirect('/usuario/reviews/');
        } else {
            res.redirect('/usuario/reviews/' + resultado.id) //si esta bien lo lleva a la pagina con sus reseñas
        }
    })
},


getReviews: function(req,res){
    DB.Resenas.findAll({
        where: [
            {id_usuario: req.params.id}
        ],
        include: [                     // Include: Recibe un array (así le explicamos cómo traer la relación),
            {association: "usuario"}   //le decimos en un objeto literal que nosotros ya definimos una asociación que es usuario.
        ]
    })
    .then(resultado =>{
        console.log(resultado);
        res.render('misReviews', {resultado:resultado})
    })
},


deleteReview: function (req,res){
    res.render('loginReview', { tipo: "delete", deleteId: req.params.id})
},

confirmDelete: function (req, res){
    moduloLogin.validar(req.body.email, req.body.password)
    .then(resultado =>{
        if (resultado != null){
            DB.Resenas.destroy({   //metodo que permite eliminar registros de la tabla.
                where: {
                    id: req.params.id,  //Recibe solo un parametro: un objeto literal con un where.
                }
            })
            res.redirect("/usuario/reviews/")
            // res.redirect("/usuario/detalle?idPelicula="+resultado.id_pelicula) //si estan bien los datos, lo devuelve a la pagina de entrar a ver sus reseñas
        }else{
            res.render("/usuario/reviews/delete/" + req.params.id) 
        }
    })
},


showEdit: function (req,res){
    DB.Resenas.findOne({
        where: [
            {id: req.params.id}
        ]
    })
    .then(resultado => {
        res.render('editReview', {resultado: resultado})
    })
},

confirmEdit: function (req,res) {

    DB.Resenas.update({ //metodo para editar registros de la tabla, recibe 2 objetos literales.
        texto_de_reseña: req.body.resenia,          //los campos de la tabla a cambiar y sus valores.
        puntaje_sobre_pelicula: req.body.puntaje
    },{
        where: {
            id: req.params.id,   //where indicando en que registro hacer los cambios (si no lo pogno se cambian todos los campos de la BD)
        }
    }
    ).then(() => {
        DB.Resenas.findByPk(req.params.id)
        .then(resultado =>{
            res.redirect('/usuario/reviews/'+resultado.id_usuario)
        })
    })
},


};

 
 module.exports = usuarioCont;  

