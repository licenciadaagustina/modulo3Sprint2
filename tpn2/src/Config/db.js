const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Aquí usarías tu cadena de conexión de MongoDB Compass o Atlas [cite: 69]
        await mongoose.connect('mongodb+srv://usuario:password@cluster0.mongodb.net/superheroesDB');
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
};

module.exports = connectDB;