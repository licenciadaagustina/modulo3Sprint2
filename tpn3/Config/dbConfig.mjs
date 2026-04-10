import mongoose from 'mongoose';

export async function conectarDB() {
    try {
        const uri = "mongodb+srv://grupo-03:grupo-03@cluster0.blryo.mongodb.net/NodeMod3Cohorte5";
        
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