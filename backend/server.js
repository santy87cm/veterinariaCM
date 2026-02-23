const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const clientesRoutes = require('./routes/clientesRoutes.js');
const mascotasRoutes = require('./routes/mascotasRoutes.js');



app.use('/api/clientes', clientesRoutes);
app.use('/api/mascotas', mascotasRoutes);



// Servidor
app.listen(PORT, () => {
  console.log(`Servidor backend funcionando en http://localhost:${PORT}`);
});

