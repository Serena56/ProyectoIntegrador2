module.exports = function (sequelize, DataTypes) {
	const usuario = sequelize.define(
		// nombre del modelo
		'Usuario', 
		
		// Columnas de la tabla
		{
			nombre_de_usuario: DataTypes.STRING(400),
			email: DataTypes.STRING(400),
			password: DataTypes.STRING(400),
			fecha_de_nacimiento: DataTypes.DATE,
		},

		// Configuración del modelo
		{
			tableName: 'usuarios', // nombre real de la tabla
			timestamps: false, // cuando no tenemos las columnas createdAt y updatedAt
		}
    );

    
    return usuario;
    
}
