const express = require('express');
const connectDB = require('./config/db');
const superheroController = require('./controllers/superheroController');

const app = express();
app.use(express.json()); // Para que el servidor entienda archivos JSON [cite: 105]

// Conectar a MongoDB [cite: 12, 73]
connectDB();

// --- RUTAS ---
// Ruta para buscar por nombre real (Ej: /superheroes/buscar/Tony Stark)
app.get('/superheroes/buscar/:nombreReal', superheroController.buscarPorNombreReal);

// Otras rutas del práctico
app.get('/superheroes/tierra', superheroController.obtenerSuperheroesTierra);
app.post('/superheroes', superheroController.crearSuperHeroe);
app.put('/superheroes/:nombre', superheroController.actualizarEdad);
app.delete('/superheroes/:nombre', superheroController.eliminarHeroe);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));