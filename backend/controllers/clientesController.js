const Cliente = require('../models/clientes.model.js');

// Obtener todos los clientes
const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.getAll();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

// Crear cliente
const crearCliente = async (req, res) => {
  const { nombre, telefono, correo } = req.body;

  try {
    const nuevo = await Cliente.create(nombre, telefono, correo);
    res.json({ mensaje: "Cliente creado correctamente", id: nuevo.id });
  } catch (err) {
    res.status(500).json({ error: "Error al crear cliente" });
  }
};

// Editar cliente
const editarCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, correo } = req.body;

  try {
    await Cliente.update(id, nombre, telefono, correo);
    res.json({ mensaje: "Cliente actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al actualizar cliente" });
  }
};

// Eliminar cliente
const eliminarCliente = async (req, res) => {
  const { id } = req.params;

  try {
    await Cliente.delete(id);
    res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar cliente" });
  }
};

module.exports = {
  obtenerClientes,
  crearCliente,
  editarCliente,
  eliminarCliente
};

