"use strict";
const empleados = require("../models/empleado.model");

exports.findAll = function (req, res) {
  empleados.findAll(function (err, data) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", data);
    res.send(data);
  });
};

exports.create = function (req, res) {
  const new_employee = new empleados(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    empleados.create(new_employee, function (err, data) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Empleado agrega correctamente",
        data: data,
      });
    });
  }
};
exports.findById = function (req, res) {
    empleados.findById(req.params.id, function (err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.delete = function (req, res) {
    empleados.delete(req.params.id, function (err, data) {
    if (err) res.send(err);
    res.json({ error: false, message: "Empleado eliminado correctamente" });
  });
};
