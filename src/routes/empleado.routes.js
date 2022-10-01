const express = require('express')

const router = express.Router()

const empleadosController =   require('../controllers/empleados.controller');
// obtenemos todos empleados
router.get('/', empleadosController.findAll);
// Crear los empleados
router.post('/', empleadosController.create);
// buscamos a los empleados por id
router.get('/:id', empleadosController.findById);
// eliminamos a los  empleados por
router.delete('/:id', empleadosController.delete);
module.exports = router 

