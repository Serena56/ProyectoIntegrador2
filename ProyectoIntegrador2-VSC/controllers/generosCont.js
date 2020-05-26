const generosCont = {
    mostrarGeneros: function (req, res) {
        res.render('pagina2');
    },

    peliculasPorGenero: function (req, res) {
        res.render('pagina4');
    },
 };
 
 module.exports = generosCont;  