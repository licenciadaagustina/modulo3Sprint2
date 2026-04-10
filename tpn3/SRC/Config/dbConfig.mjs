import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargamos las variables de entorno
dotenv.config();

export async function conectarDB() {
    try {
        // Usamos la URI de la variable de entorno
        const uri = process.env.MONGO_URI;
        
        if (!uri) {
            throw new Error("La variable MONGO_URI no está definida en el archivo .env");
        }

        await mongoose.connect(uri);
        
        console.log('✅ Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error.message);
        process.exit(1); // Detiene la app si no hay conexión
    }
}