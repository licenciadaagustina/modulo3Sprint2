const mongoose = require('mongoose');

// Aquí debes pegar tu cadena de conexión de MongoDB Compass [cite: 69, 72]
const url = 'mongodb+srv://tu_usuario:tu_password@cluster0.mongodb.net/superheroesDB';

async function conectarDB() {
    try {
        await mongoose.connect(url);
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
}

module.exports = conectarDB;