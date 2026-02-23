const db = require('../db/db.js');

// Obtener todas las mascotas
const obtenerMascotas = (req, res) => {
  db.all("SELECT * FROM mascotas", [], (err, rows) => {
    if (err) return res.status(500).json({ error: "Error al obtener mascotas" });
    res.json(rows);
  });
};

// Crear mascota
const crearMascota = (req, res) => {
  const { nombre, especie, raza, edad, cliente_id } = req.body;

  db.run(
    "INSERT INTO mascotas (nombre, especie, raza, edad, cliente_id) VALUES (?, ?, ?, ?, ?)",
    [nombre, especie, raza, edad, cliente_id],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al crear mascota" });
      res.json({ mensaje: "Mascota creada correctamente", id: this.lastID });
    }
  );
};

// Editar mascota
const editarMascota = (req, res) => {
  const { id } = req.params;
  const { nombre, especie, raza, edad, cliente_id } = req.body;

  db.run(
    "UPDATE mascotas SET nombre=?, especie=?, raza=?, edad=?, cliente_id=? WHERE id=?",
    [nombre, especie, raza, edad, cliente_id, id],
    function (err) {
      if (err) return res.status(500).json({ error: "Error al actualizar mascota" });
      res.json({ mensaje: "Mascota actualizada correctamente" });
    }
  );
};

// Eliminar mascota
const eliminarMascota = (req, res) => {
  const { id } = req.params;

  db.run("DELETE FROM mascotas WHERE id=?", [id], function (err) {
    if (err) return res.status(500).json({ error: "Error al eliminar mascota" });
    res.json({ mensaje: "Mascota eliminada correctamente" });
  });
};

module.exports = {
  obtenerMascotas,
  crearMascota,
  editarMascota,
  eliminarMascota
};
