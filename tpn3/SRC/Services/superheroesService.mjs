import * as repository from '../persistence/superheroesRepository.mjs';

export async function obtenerTodosLosSuperheroes() {
    return await repository.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
    return await repository.obtenerPorId(id);
}

export async function agregarSuperheroe(datos) {
    // Aquí podrías agregar lógica de negocio antes de guardar
    if (datos.poderes && typeof datos.poderes === 'string') {
        datos.poderes = datos.poderes.split(',').map(p => p.trim());
    }
    return await repository.guardar(datos);
}

export async function actualizarSuperheroe(id, datos) {
    return await repository.actualizar(id, datos);
}

export async function eliminarSuperheroe(id) {
    return await repository.eliminar(id);
}