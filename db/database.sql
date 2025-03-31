CREATE DATABASE railway;
USE railway;

CREATE TABLE alumnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    matricula VARCHAR(10),
    nombre VARCHAR(45),
    domicilio VARCHAR(45),
    fechanac DATE,
    sexo VARCHAR(45),
    status INT DEFAULT 0
);
