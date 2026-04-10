import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    nombreSociedad: String,
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Tierra' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: [String],
    createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-03' }); // Puedes ajustar el nombre de la colección

export default mongoose.model('Superhero', superheroSchema);