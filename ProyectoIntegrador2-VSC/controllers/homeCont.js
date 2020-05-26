const homeCont = {
   index: function (req, res) {
    res.render('Home');
},

    busqueda: function (req, res) {
        res.render('pagina5');
},

// homeLoggedIn: function (req, res) {
//     res.render('HomeLoggedIn');
// },

};

module.exports = homeCont;  