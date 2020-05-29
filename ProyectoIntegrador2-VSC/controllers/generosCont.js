const generosCont = {
    mostrarGeneros: function (req, res) {
        res.render('pagina2');
    },

    peliculasPorGenero: function (req, res) {
        res.render('pagina3');
    },
 };
 
 module.exports = generosCont;  