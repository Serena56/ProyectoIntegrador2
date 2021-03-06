let db = require('./database/models')
const bcrypt = require('bcryptjs')

let moduloLogin = {
    chequearUsuario: function (email) {   //Chequear que exista en la base de datos
        return db.usuario.findOne({
            where: {
                email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){   //Toma un email como parámetro, busca en la base de datos el usuario que corresponda a ese mail.
        return db.usuario.findOne({
            where: {
                email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.usuario.findOne({
            where:{
                email:email,
               // password: pass
            },
        })
        // .then(results=>{
        //     if (results != null){
        //         let chequeo = bcrypt.compareSync (pass, results.password)
        //         if (chequeo) {
        //             return results;
        //         }else{
        //             return undefined
        //         }
        //     }else{
        //         return undefined
        //     }
            
        // })
        // .catch(e => console.log(e))
    }
}


module.exports = moduloLogin;