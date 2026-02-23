const express = require('express');
const {
  obtenerClientes,
  crearCliente,
  editarCliente,
  eliminarCliente
} = require('../controllers/clientesController.js');

const router = express.Router();

router.get('/', obtenerClientes);
router.post('/', crearCliente);
router.put('/:id', editarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;




