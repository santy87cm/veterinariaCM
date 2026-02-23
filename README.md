Proyecto VeterinariaCM..

Aplicación web para la gestión de clientes y mascotas.

Esta propuesta de trabajo forma parte de una práctica donde se pide desarrollar una aplicación web completa, con un backend que funcione como API REST y un frontend que permita al usuario interactuar con los datos. En mi caso, he creado un sistema sencillo para gestionar la información de una clínica veterinaria, centrándome en dos elementos principales:

Clientes.
Mascotas.

El objetivo es poder realizar todas las operaciones básicas que tiene un CRUD: crear, ver, editar y eliminar registros. La aplicación está dividida en dos partes: un backend hecho con Node.js y Express, y un frontend hecho con HTML, CSS y JavaScript.

Objetivo del proyecto

El propósito de este trabajo es aprender a:

Crear una API REST con Express.
Conectar esa API a una base de datos SQLite.
Organizar el backend en controladores, modelos, rutas y middlewares.
Consumir la API desde un frontend usando JavaScript y fetch.
Gestionar el proyecto con GitHub utilizando ramas y Pull Requests.

Estructura del proyecto
La estructura del proyecto dentro de la carpeta VeterinariaCM/backend queda organizada así:

veterinariaCM/
│
├── backend/
│   ├── controllers/      # Lógica de cada operación del CRUD
│   ├── db/               # Configuración de la base de datos (db.js)
│   ├── middlewares/      # Middlewares personalizados
│   ├── models/           # Modelos de datos
│   ├── routes/           # Rutas de la API
│   ├── node_modules/     # Dependencias instaladas
│   ├── package.json      # Configuración del backend
│   ├── package-lock.json
│   └── server.js         # Archivo principal del servidor
│
└── Frontend/
    ├── css/              # Estilos
    ├── js/               # Lógica del frontend
    ├── clientes.html     # Página para gestionar clientes
    └── mascotas.html     # Página para gestionar mascotas

Backend (API REST)

El backend está desarrollado con Node.js y Express, y utiliza SQLite3 como base de datos.
Toda la configuración de la base de datos se encuentra en:

backend/db/db.js
Este archivo se encarga de crear la conexión y las tablas necesarias cuando el servidor se inicia, por lo que no hace falta crear ningún archivo .sqlite manualmente.

Dependencias del backend

Las dependencias principales que se usan son:

express - para crear el servidor y las rutas.
sqlite3 - para trabajar con la base de datos.
cors - para permitir peticiones desde el frontend.
express-validator - para validar los datos antes de guardarlos.
nodemon (solo en desarrollo) - para reiniciar el servidor automáticamente.

Cómo arrancar el backend

1 Abrir una terminal en la carpeta del proyecto VeterianariaCM.
2 Entrar en la carpeta del backend con: cd backend.
3 Instalar las dependencias: con npm install.
4 Arrancar el servidor con: npm start y luego con: npm run dev.
Con esto el servidor se ejecutará en el puerto configurado en este caso es server.js 

Frontend

El frontend está hecho con HTML, CSS y JavaScript. No utiliza frameworks ni requiere instalación de dependencias.

Las páginas principales son:

clientes.html
mascotas.html

Cada una de ellas carga sus archivos CSS y JS correspondientes desde las carpetas css y js.

Cómo usar el frontend

1 Asegúrate de que el backend está arrancado.
2 Abre cualquiera de los archivos HTML en el navegador:

clientes.html
mascotas.html

Desde estas páginas se pueden realizar todas las operaciones del CRUD mediante peticiones fetch al backend.

Endpoints de la API

Clientes
GET /clientes → Lista todos los clientes.
POST /clientes → Crea un cliente nuevo.
PUT /clientes/:id → Edita un cliente existente.
DELETE /clientes/:id → Elimina un cliente.

Mascotas
GET /mascotas → Lista todas las mascotas.
POST /mascotas → Crea una mascota nueva.
PUT /mascotas/:id → Edita una mascota existente.

DELETE /mascotas/:id → Elimina una mascota.
Esto nos permite gestionar clientes y mascotas para hacer estas 4 acciones como, ver, crear, editar y eliminar
funciona como un manual de instrucciones que indica cómo el frontend puede pedirle cosas al backend.

Tecnologías utilizadas

Backend
Node.js
Express
SQLite3
CORS
express-validator
Nodemon

Frontend
HTML
CSS
JavaScript
Fetch API

Notas finales

Este proyecto se ha desarrollado siguiendo una metodología basada en ramas de Git. Cada nueva funcionalidad se ha trabajado en una rama independiente y se ha fusionado mediante Pull Requests, tal como se pedía en la práctica.
El resultado es una aplicación sencilla pero funcional, que permite gestionar clientes y mascotas desde un frontend conectado a un backend con base de datos.





