import { 
    obtenerTodosLosSuperheroes, 
    obtenerSuperheroePorId,
    buscarSuperheroePorAtributo,
    obtenerSuperheroeMayorDe
} from '../services/superheroesService.mjs';

// Obtener todos los superhéroes
export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const heroes = await obtenerTodosLosSuperheroes();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener superhéroe por ID
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const heroe = await obtenerSuperheroePorId(req.params.id);
        if (!heroe) {
            return res.status(404).json({ error: 'Superhéroe no encontrado' });
        }
        res.json(heroe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Buscar superhéroes por atributo y valor
export async function buscarSuperheroePorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const heroes = await buscarSuperheroePorAtributo(atributo, valor);
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener superhéroes mayores de X años
export async function obtenerSuperheroeMayorDeEdadController(req, res) {
    try {
        const edad = parseInt(req.params.edad);
        const heroes = await obtenerSuperheroeMayorDe(edad);
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}