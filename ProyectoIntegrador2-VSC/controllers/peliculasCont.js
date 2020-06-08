const DB = require('../database/models');

const peliculasCont = {


 detallePelicula: (req, res) => {
    DB.Resenas
    .findAll ({
        where: [
           { id_pelicula: req.query.idPelicula }
        ], 
        include: ['usuario']
    }) 
    .then(resenas => {
        return res.render('pagina5', {
            resenaPelicula: resenas,
            idPelicula: req.query.idPelicula
        });
    }) 
    .catch(error => {
        res.send (error)
    })
}, 
 
};
 module.exports = peliculasCont;  