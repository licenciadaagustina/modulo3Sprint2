import express from 'express';
import { conectarDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superheroesRoutes.mjs';

const app = express();
const PORT = 3000;

// Conexión a la base de datos
conectarDB();

// Middlewares
app.use(express.json());



// Rutas
app.use('/heroes', superheroesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});