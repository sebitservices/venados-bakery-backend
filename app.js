// Cargar variables de entorno desde el archivo .env en desarrollo
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: '*', // En producción, restringe esto a tu dominio frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rutas
app.use('/api/auth', authRoutes);

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API de Venados Bakery & Coffee funcionando correctamente');
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 