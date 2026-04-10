import * as repository from '../persistence/superheroesRepository.mjs';

export async function obtenerTodosLosSuperheroes() {
    return await repository.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
    return await repository.obtenerPorId(id);
}

export async function buscarSuperheroePorAtributo(atributo, valor) {
    return await repository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroeMayorDe(edad) {
    return await repository.obtenerMayorDe(edad);
}