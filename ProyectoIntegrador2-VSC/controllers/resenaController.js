const DB = require ("../database/models"); //incluimos la conexion a la base de datos
const moduloLogin = require ("../modulo-login"); //para poder validar

module.exports = {

   //todos las reseñas
    // index: (req,res) => {
    //     DB.Resenas
    //      .findAll (
    //     //      {

    //     //      include: ['usuario']
    //     //  }
    //      )
    //      .then(resenias => {
    //          return res.send(
    //              resenias
    //         );
    //      })
    //      .catch(error => {
    //         return res.send(error);
    //     });
    // },

// Creando Reseñas
    creaResena: function (req, res) {
        console.log(req.body.email);
        console.log(req.body.password);
      moduloLogin.validar (req.body.email, req.body.password)  //para poder validar
      .then (function (usuario) {
        console.log(usuario);
          if (usuario != undefined) {   // Solo quiero una reseña si me retorna bien los datos del usuario.
            const resenia = {
                id_pelicula: req.body.id_pelicula,
                id_usuario: usuario.id,
                texto_de_reseña: req.body.texto_de_reseña,
                puntaje_sobre_pelicula: req.body.puntaje_sobre_pelicula
            }

            
              DB.Resenas.create (resenia)
              .then (function (resultado) {
                  res.render("gracias")
              })
          } else {
              res.render("problema")
          }
      })
    },
};