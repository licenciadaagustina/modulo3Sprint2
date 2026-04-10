import Superhero from '../Models/Superhero.mjs';

export async function obtenerTodos() {
    return await Superhero.find({});
}

export async function obtenerPorId(id) {
    return await Superhero.findById(id);
}

export async function buscarPorAtributo(atributo, valor) {
    // Crear objeto de búsqueda dinámico
    const query = {};
    
    // Mapear posibles atributos
    switch(atributo.toLowerCase()) {
        case 'nombre':
            query.nombreSuperheroe = { $regex: valor, $options: 'i' };
            break;
        case 'nombreal':
            query.nombreReal = { $regex: valor, $options: 'i' };
            break;
        case 'poder':
            query.poderes = { $regex: valor, $options: 'i' };
            break;
        case 'enemigo':
            query.enemigos = { $regex: valor, $options: 'i' };
            break;
        case 'aliado':
            query.aliados = { $regex: valor, $options: 'i' };
            break;
        case 'planeta':
            query.planetaOrigen = { $regex: valor, $options: 'i' };
            break;
        case 'debilidad':
            query.debilidad = { $regex: valor, $options: 'i' };
            break;
        default:
            query[atributo] = { $regex: valor, $options: 'i' };
    }
    
    return await Superhero.find(query);
}

export async function obtenerMayorDe(edad) {
    return await Superhero.find({ edad: { $gte: edad } });
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