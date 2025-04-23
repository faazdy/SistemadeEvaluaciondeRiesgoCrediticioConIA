CREATE DATABASE IF NOT EXISTS `riesgo_crediticio`;
USE `riesgo_crediticio`;
CREATE TABLE `nivel_riesgos` (
  `id_nivel` INT AUTO_INCREMENT PRIMARY KEY,
  `nivel_riesgos` VARCHAR(10)
);

CREATE TABLE `evaluacion_riesgos` (
  `id_evaluación_riesgos` INT AUTO_INCREMENT PRIMARY KEY,
  `id_solicitud` INT,
  `id_nivel` INT,
  `fecha_evaluacion` DATE,
  `score` FLOAT,
  FOREIGN KEY (`id_nivel`) REFERENCES `nivel_riesgos`(`id_nivel`)
);

CREATE TABLE `tipo_documento` (
  `id_documento` INT AUTO_INCREMENT PRIMARY KEY,
  `tipo` VARCHAR(20)
);

CREATE TABLE `rol` (
  `id_rol` INT AUTO_INCREMENT PRIMARY KEY,
  `rol` VARCHAR(15)
);

CREATE TABLE `Persona` (
  `id_persona` INT PRIMARY KEY,
  `id_documento` INT,
  `id_rol` INT,
  `nombres` VARCHAR(50),
  `apellidos` VARCHAR(50),
  `telefono` VARCHAR(20),
  `email` VARCHAR(50),
  `direccion` VARCHAR(150),
  FOREIGN KEY (`id_documento`) REFERENCES `tipo_documento`(`id_documento`),
  FOREIGN KEY (`id_rol`) REFERENCES `rol`(`id_rol`)
);

CREATE TABLE `estados_solicitud` (
  `id_estados` INT AUTO_INCREMENT PRIMARY KEY,
  `estados` VARCHAR(30)
);

CREATE TABLE `Solicitudes` (
  `id_solicitud` INT AUTO_INCREMENT PRIMARY KEY,
  `id_persona` INT,
  `id_estados` INT,
  `monto_solicitado` DECIMAL(10, 0),
  `fecha_solicitud` DATE,
  FOREIGN KEY (`id_persona`) REFERENCES `Persona`(`id_persona`),
  FOREIGN KEY (`id_estados`) REFERENCES `estados_solicitud`(`id_estados`)
);

CREATE TABLE `tipo_contraro` (
  `id_tipo_contrato` INT AUTO_INCREMENT PRIMARY KEY,
  `contrato` VARCHAR(20)
);

CREATE TABLE `empleos` (
  `id_empleo` INT AUTO_INCREMENT PRIMARY KEY,
  `id_tipo_contrato` INT,
  `id_persona` INT,
  `empresa` VARCHAR(100),
  `cargo` VARCHAR(100),
  `fecha_inicio` DATE,
  `fecha_fin` DATE,
  `salario` DECIMAL(10, 0),
  FOREIGN KEY (`id_tipo_contrato`) REFERENCES `tipo_contraro`(`id_tipo_contrato`),
  FOREIGN KEY (`id_persona`) REFERENCES `Persona`(`id_persona`)
);

CREATE TABLE `historial_credito` (
  `id_historial_credito` INT AUTO_INCREMENT PRIMARY KEY,
  `id_persona` INT,
  `dias_mora` INT,
  `total_creditos` INT,
  `creditos_incumplidos` INT,
  FOREIGN KEY (`id_persona`) REFERENCES `Persona`(`id_persona`)
);

CREATE TABLE `usuarios` (
  `id_usuarios` INT AUTO_INCREMENT PRIMARY KEY,
  `id_persona` INT,
  `nombre_usuario` VARCHAR(25),
  `contraseña` VARCHAR(10),
  FOREIGN KEY (`id_persona`) REFERENCES `Persona`(`id_persona`)
);

CREATE TABLE `informacion_financiera` (
  `id_informacion` INT AUTO_INCREMENT PRIMARY KEY,
  `id_persona` INT,
  `id_empleo` INT,
  `ingresos_mensuales` DECIMAL(10, 0),
  `egresos_mensuales` DECIMAL(10, 0),
  `deudas` DECIMAL(10, 0),
  `patrimonio` DECIMAL(10, 0),
  `fecha_actualizacion` DATE,
  FOREIGN KEY (`id_persona`) REFERENCES `Persona`(`id_persona`)
);

INSERT INTO tipo_documento (tipo) VALUES ('C.C');

INSERT INTO rol (rol) VALUES ('Cliente');

INSERT INTO nivel_riesgos (nivel_riesgos) VALUES ('Alto');

INSERT INTO estados_solicitud (estados) VALUES ('Pendiente');

INSERT INTO tipo_contraro (contrato) VALUES ('Indefinido');

INSERT INTO Persona (
  id_persona, id_documento, id_rol, nombres, apellidos, telefono, email, direccion
) VALUES (
  1111111111, 1, 1, 'Pepito', 'Pérez', '3101234567', 'pepito.perez@gmail.com', 'calle 72A'
);

INSERT INTO Solicitudes (
  id_persona, id_estados, monto_solicitado, fecha_solicitud
) VALUES (
  1111111111, 1, 5000000, '2025-04-17'
);

INSERT INTO evaluacion_riesgos (
  id_solicitud, id_nivel, fecha_evaluacion, score
) VALUES (
  1, 1, '2025-04-17', 450.5
);

INSERT INTO empleos (
  id_tipo_contrato, id_persona, empresa, cargo, fecha_inicio, fecha_fin, salario
) VALUES (
  1, 1111111111, 'prueba', 'prueba', '2020-01-15', '2025-04-01', 3500000
);

INSERT INTO informacion_financiera (
  id_persona, id_empleo, ingresos_mensuales, egresos_mensuales, deudas, patrimonio, fecha_actualizacion
) VALUES (
  1111111111, 1, 3500000, 1500000, 1200000, 10000000, '2025-04-17'
);

INSERT INTO historial_credito (
  id_persona, dias_mora, total_creditos, creditos_incumplidos
) VALUES (
  1111111111, 45, 3, 1
);

INSERT INTO usuarios (
  id_persona, nombre_usuario, contraseña
) VALUES (
  1111111111, 'pepito.perez', '123456789'
);

RENAME TABLE `usuarios` TO `users`;
ALTER TABLE `users` CHANGE `id_usuarios` `id` INT NOT NULL AUTO_INCREMENT;
ALTER TABLE `users` DROP FOREIGN KEY `usuarios_ibfk_1`;
ALTER TABLE `users` DROP COLUMN `id_persona`;
ALTER TABLE `users` CHANGE `nombre_usuario` `username` VARCHAR(25);
ALTER TABLE `users` CHANGE `contraseña` `password` VARCHAR(10);