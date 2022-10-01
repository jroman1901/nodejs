"use strict";

var dbConn = require("../../config/db.config");

//modelo para crear el modelo
var empleados = function (empleado) {
  this.primer_nombre = empleado.primer_nombre;
  this.segundo_nombre = empleado.segundo_nombre;
  this.email = empleado.email;
  this.telefono = empleado.telefono;
  this.puesto = empleado.puesto;
  this.salario = empleado.salario;
  this.estatus = empleado.estatus ? empleado.estatus : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

empleados.create = function (newEmp, result) {
  dbConn.query("INSERT INTO empleados set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

empleados.findById = function (id, result) {
  dbConn.query(
    "Select * from empleados where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

empleados.findAll = function (result) {
  dbConn.query("Select * from empleados", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("empleados : ", res);
      result(null, res);
    }
  });
};

empleados.delete = function (id, result) {
  dbConn.query("DELETE FROM empleados WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports =empleados;