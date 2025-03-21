CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    domicilio VARCHAR(100),
    edad INT,
    sexo VARCHAR(1)
);

DESCRIBE usuarios;


INSERT INTO usuarios (nombre, domicilio, edad, sexo) VALUES 
('Jesus', 'Calle 1', 20, 'M'),
('Rolando', 'Calle 2', 21, 'M'),
('Cruz', 'Calle 3', 22, 'M'),
('Perez', 'Calle 4', 23, 'M');
