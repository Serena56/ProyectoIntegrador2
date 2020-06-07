// module.exports = (sequelize, DataTypes) => {
	
// 		// nombre del modelo
// 		let alias = "Usuario";
		
// 		// Columnas de la tabla
// 		let cols = {
// 			id: {
// 				type: DataTypes.INTEGER,
// 				primaryKey: true,
// 			},
// 			nombre_de_usuario: DataTypes.STRING(400),
// 			email: DataTypes.STRING(400),
// 			password: DataTypes.STRING(400),
// 			fecha_de_nacimiento: DataTypes.DATE,
// 		};

// 		// Configuración del modelo
// 		let config = {
// 			tableName: 'usuarios', // nombre real de la tabla
// 			timestamps: false, // cuando no tenemos las columnas createdAt y updatedAt
// 		};
	

// 	const Usuario = sequelize.define(alias,cols,config);

// 	Usuario.associate = function (models) {
// 	Usuario.hasMany(models.Resenas, {
// 		as: 'resenas',
// 		foreignKey: 'id_usuario',
// 	  })
// 	}
	
	    

//     return Usuario;
    
// }

module.exports = function (sequelize, DataTypes){
    const usuario = sequelize.define( // define me permite definir la estructura de la tabla
        'usuario', //nombre del modelo
        {     // objeto literal con las columnas que me quiero traer de la tabla
            nombre_de_usuario: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            fecha_de_nacimiento: DataTypes.DATE,
        }, 
       { //configuracion del modelo
        timestamps: false  //cuando no tenemos las columnas createdAt y updatedAt
       }
    ); 
 
    usuario.associate = function (models) {  // associate recibe una función que incluye a todos nuestros modelos del código. Acá dentro definimos las relaciones. 
        usuario.hasMany (models.Resenas, {  //un usuario TIENE MUCHAS reseñas 
            as: "resenas" , 
            foreignKey: "id_usuario"
        }) ;
    }

    return usuario; 
}
