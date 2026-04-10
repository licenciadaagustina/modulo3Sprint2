const mongoose = require('mongoose');

// Definición del esquema según las consignas del Sprint [cite: 142]
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true }, // [cite: 143]
    nombreReal: { type: String, required: true },       // [cite: 144]
    edad: { type: Number, min: 0 },                    // [cite: 145]
    planetaOrigen: { type: String, default: 'Desconocido' }, // [cite: 146]
    debilidad: String,                                  // [cite: 147]
    poderes: [String],                                  // [cite: 148]
    aliados: [String],                                  // [cite: 149]
    enemigos: [String],                                 // [cite: 150]
    createdAt: { type: Date, default: Date.now }       // [cite: 152]
});

// Exportamos el modelo para usarlo en el repositorio [cite: 159]
module.exports = mongoose.model('SuperHero', superheroSchema);