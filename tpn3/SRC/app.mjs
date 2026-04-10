import express from 'express';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import { conectarDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superheroesRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conexión a la base de datos
conectarDB();

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Importante para leer formularios
app.use(methodOverride('_method')); // Para usar PUT y DELETE en formularios
app.use(express.static(path.join(__dirname, '../public'))); // Archivos estáticos

// Rutas
app.use('/heroes', superheroesRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/heroes`);
});