const sqlite3 = require('sqlite3').verbose();

// Crear o conectar a la base de datos
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
  } else {
    console.log('Base de datos conectada');
  }
});

// Crear tabla clientes si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    telefono TEXT,
    correo TEXT
  )
`);

// Crear tabla mascotas si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS mascotas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    especie TEXT NOT NULL,
    raza TEXT,
    edad INTEGER,
    cliente_id INTEGER,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
  )
`);

// Tabla de citas
db.run(`
  CREATE TABLE IF NOT EXISTS citas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fecha TEXT NOT NULL,
    hora TEXT NOT NULL,
    motivo TEXT,
    estado TEXT,
    cliente_id INTEGER,
    mascota_id INTEGER,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (mascota_id) REFERENCES mascotas(id)
  )
`);


module.exports = db;


