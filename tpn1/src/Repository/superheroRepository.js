const SuperHero = require('../models/Superhero');

// Función para obtener todos los superhéroes [cite: 175]
async function obtenerTodos() {
    return await SuperHero.find({});
}

// Función para buscar héroes de la Tierra [cite: 175]
async function obtenerHéroesTierra() {
    return await SuperHero.find({ planetaOrigen: 'Tierra' });
}

// Función para actualizar la edad de un superhéroe [cite: 178, 180]
async function actualizarEdad(nombre, nuevaEdad) {
    return await SuperHero.updateOne(
        { nombreSuperHeroe: nombre },
        { $set: { edad: nuevaEdad } }
    );
}

// Función para eliminar un superhéroe por nombre [cite: 183]
async function eliminarHeroe(nombre) {
    return await SuperHero.deleteOne({ nombreSuperHeroe: nombre });
}

module.exports = { 
    obtenerTodos, 
    obtenerHéroesTierra, 
    actualizarEdad, 
    eliminarHeroe 
};