
module.exports = (sequelize, DataTypes) => {
	
	// nombre del modelo
	let alias = "Resenas";
	
	// Columnas de la tabla
	let cols = {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		    id_pelicula: DataTypes.INTEGER,
			id_usuario: DataTypes.INTEGER,
			texto_de_reseña: DataTypes.STRING(1000),
			fecha_de_creacion: DataTypes.DATE,
            fecha_de_actualizacion: DataTypes.DATE,
            puntaje_sobre_pelicula: DataTypes.INTEGER,
	};

	// Configuración del modelo
	let config = {
		tableName: 'reseñas', // nombre real de la tabla
		timestamps: false, // cuando no tenemos las columnas createdAt y updatedAt
	};


const Resena = sequelize.define(alias,cols,config);

Resena.associate = function (models) {
	Resena.belongsTo(models.Usuarios, {
		as: 'usuario',
		foreignKey: 'id_usuario',
	});
	}

	

return Resena;

}

