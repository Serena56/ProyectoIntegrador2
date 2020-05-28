module.exports = function (sequelize, DataTypes) {
	const reseña = sequelize.define(
		// nombre del modelo
		'Reseña', 
		
		// Columnas de la tabla
		{
            id_pelicula: DataTypes.INTEGER,
			id_usuario: DataTypes.INTEGER,
			texto_de_reseña: DataTypes.STRING(1000),
			fecha_de_creacion: DataTypes.DATE,
            fecha_de_actualizacion: DataTypes.DATE,
            puntaje_sobre_pelicula: DataTypes.INTEGER,
		},

		// Configuración del modelo
		{
			tableName: 'reseñas', // nombre real de la tabla
			timestamps: false, // cuando no tenemos las columnas createdAt y updatedAt
		}
    );

    
    return reseña;

    console.log('reseñas');

    
}

