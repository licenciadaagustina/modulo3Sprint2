import Superhero from '../models/Superhero.mjs';

export async function obtenerTodos() {
    return await Superhero.find({});
}

export async function obtenerPorId(id) {
    return await Superhero.findById(id);
}

export async function guardar(datos) {
    const nuevoHeroe = new Superhero(datos);
    return await nuevoHeroe.save();
}

export async function actualizar(id, datos) {
    return await Superhero.findByIdAndUpdate(id, datos, { new: true });
}

export async function eliminar(id) {
    return await Superhero.findByIdAndDelete(id);
}