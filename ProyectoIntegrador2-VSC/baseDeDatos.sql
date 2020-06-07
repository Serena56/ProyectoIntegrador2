CREATE DATABASE ProyectoIntegrador2-VSC 

-- Creando Table usuarios

CREATE TABLE usuarios  (
 id  INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY , 
 nombre_de_usuario  VARCHAR (400) NOT NULL ,
 email VARCHAR (400) ,
 password VARCHAR (400) ,
 fecha_de_nacimiento DATETIME 
);

-- Creando Table reseñas

CREATE TABLE reseñas  (
 id  INT (10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY , 
 id_pelicula INT UNSIGNED NOT NULL,
 id_usuario INT UNSIGNED NOT NULL,
 texto_de_reseña VARCHAR (1000) NOT NULL, 
 fecha_de_creacion DATETIME NOT NULL,  
 fecha_de_actualizacion DATETIME NOT NULL,
 puntaje_sobre_pelicula INT UNSIGNED NOT NULL

);

-- Creando Usuarios

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Trinidad','trinipardo@hotmail.com','trini2001','2001-03-07');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Serena','seredominguez@hotmail.com','serena2000','2000-03-02');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Lucas','lucasperez@hotmail.com','lucas2000','2000-07-09');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Victoria','vickygonzalez@hotmail.com','vicly2000','2000-09-17');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Matias','matiastena@hotmail.com','matias1998','1998-05-09');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Clara','clarakerny@hotmail.com','clara1999','1999-04-09');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Franco','francoramirez@hotmail.com','franco1995','1995-05-02');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Delfina','delfitorres@hotmail.com','delfi1999','1999-08-20');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Margarita','maggiepereira@hotmail.com','maggie2003','2003-05-5');

INSERT INTO `usuarios` (`nombre_de_usuario`,`email`,`password`,`fecha_de_nacimiento`)
VALUES ('Lucia','luciasanchez@hotmail.com','lucia1999','1999-01-19');


-- Creando Reseñas

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (181812,2,'Pelicula decepcionante. Se preocuparon más por complacer que por sorprender.','2019/12/20', '2020/11/16', 6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (299536,2,'Muy buena película. Realmente mejor que Endgame','2018/04/27', '2019/12/08', 8);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (141052,2,'Tan mala que duele. Aguante Marvel','2017/11/17', '2018/03/01', 6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (330457,5,'Let it go.','2019/11/22', '2020/03/05', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (8966,2,'La mejor película. La mejor saga. Que decirles','2008/11/21', '2014/12/05', 6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (271110,5,'Tremenda peli. Team Capitan FOREVER','2016/05/06', '2019/10/04', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (12445,7,'Monumento a la buena película. Gracias JKR','2011/05/06', '2019/07/15', 8);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (38700,9,'Alta peli. No le tenía fe pero terminó teniendo buena trama, buena comedia y mucha acción.','2020/01/17', '2020/07/11', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (329865,3,'Flashera pero buena trama. Final sorprendente','2016/11/11', '2017/03/17', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (419704 , 2 , 'Muy buena pelicula. Mucha acción. Recomendable', '2019-09-20',  '2019-09-20' ,6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (385103  ,3 ,  'De los mejores dibujos animados', '2020-05-15', '2020-05-15', 8);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (686245, 4 , 'Esperaba mas', '2020-05-22', '2020-05-22',  6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (576156, 5 , 'Muy buena',  '2020-05-22',  '2020-05-22', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (530915, 1, 'Super interesante', ' 2020-01-10',  ' 2020-01-10', 8);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (920, 6, 'Muy divertida para ver en familia', '2006-06-09', '2006-06-09', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (420817, 7, 'De mis peliculas preferidas',  '2019-05-24', '2019-05-24', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (27205, 8, 'El final muy abierto! Quiero saber mas', '2010-07-16',  '2010-07-16', 8);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (582596, 9, 'Muy sobrevalorada', '2020-05-13', '2020-05-13', 6);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (420818, 10, 'Me emocione mucho. Muy bien recreada',  '2019-07-19', '2019-07-19', 7);

INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (131631, 1,  'Necesito ver la segunda parte', '2014-11-21', '2014-11-21', 7);


INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (475557, 2, 'Muy bien realizada. Super recomendable', '2019-10-04', '2019-10-04', 8);


INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (512200, 3, 'De mis peliculas favoritas', '2019-12-13', '2019-12-13', 7);


INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (546554, 4, 'Super interesante', '2019-11-27', '2019-11-27', 8);


INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (619264, 5, 'No es de mis favoritas pero vale la pena verla', '2019-11-08', '2019-11-08', 7);


INSERT INTO `reseñas` (`id_pelicula`,`id_usuario`,`texto_de_reseña`,`fecha_de_creacion`, `fecha_de_actualizacion`, `puntaje_sobre_pelicula`)
VALUES (481848, 6, 'No pare de llorar en toda la pelicula pero vale la pena verla', '2020-02-21',  '2020-02-21', 7);



ALTER TABLE ProyectoIntegrador2.reseñas MODIFY COLUMN fecha_de_actualizacion TIMESTAMP on update CURRENT_TIMESTAMP  NULL;

ALTER TABLE ProyectoIntegrador2.reseñas MODIFY COLUMN fecha_de_creacion timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL;


