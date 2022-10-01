-- Active: 1663429809267@@127.0.0.1@3306@apiumg
CREATE DATABASE apiumg;

CREATE  TABLE IF NOT EXISTS empleados (
  id BIGINT UNSIGNED AUTO_INCREMENT,
  primer_nombre VARCHAR(255) NOT NULL,
  segundo_nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  puesto VARCHAR(100) NOT NULL,
  salario DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
  estatus TINYINT UNSIGNED DEFAULT 0,
  is_deleted TINYINT UNSIGNED DEFAULT 0,
  created_at DATETIME NOT NULL,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id))
ENGINE = InnoDB;

INSERT INTO apiumg.empleados (primer_nombre, segundo_nombre,email,telefono,puesto,salario,estatus,created_at) VALUES ('JOSE', 'PEÑA', 'jose@gmail.com', '1234567890', 'Full Stack Developer', '500.00', '1', '2019-11-19 03:30:30');
