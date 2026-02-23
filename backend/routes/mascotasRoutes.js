const express = require('express');
const {
  obtenerMascotas,
  crearMascota,
  editarMascota,
  eliminarMascota
} = require('../controllers/mascotasController.js');

const router = express.Router();

router.get('/', obtenerMascotas);
router.post('/', crearMascota);
router.put('/:id', editarMascota);
router.delete('/:id', eliminarMascota);

module.exports = router;

