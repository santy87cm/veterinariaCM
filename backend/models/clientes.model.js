const db = require('../db/db');

// Obtener todos los clientes
exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM clientes", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

// Crear cliente
exports.create = (nombre, telefono, correo) => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO clientes (nombre, telefono, correo) VALUES (?, ?, ?)",
      [nombre, telefono, correo],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID });
      }
    );
  });
};


// Actualizar cliente
exports.update = (id, nombre, telefono, correo) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE clientes SET nombre = ?, telefono = ?, correo = ? WHERE id = ?",
      [nombre, telefono, correo, id],
      function (err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      }
    );
  });
};


// Eliminar cliente
exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    db.run(
      "DELETE FROM clientes WHERE id = ?",
      [id],
      function (err) {
        if (err) reject(err);
        else resolve({ changes: this.changes });
      }
    );
  });
};
