module.exports = (sequelize, DataTypes) => {
	
		// nombre del modelo
		let alias = "Usuarios";
		
		// Columnas de la tabla
		let cols = {
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			nombre_de_usuario: DataTypes.STRING(400),
			email: DataTypes.STRING(400),
			password: DataTypes.STRING(400),
			fecha_de_nacimiento: DataTypes.DATE,
		};

		// Configuración del modelo
		let config = {
			tableName: 'usuarios', // nombre real de la tabla
			timestamps: false, // cuando no tenemos las columnas createdAt y updatedAt
		};
	

	const Usuario = sequelize.define(alias,cols,config);
	
	    

    return Usuario;
    
}