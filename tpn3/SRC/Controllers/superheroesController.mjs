import { 
    obtenerTodosLosSuperheroes, 
    agregarSuperheroe, 
    obtenerSuperheroePorId,
    actualizarSuperheroe,
    eliminarSuperheroe 
} from '../services/superheroesService.mjs';

// Etapa 2: Mostrar el Dashboard
export async function obtenerTodosLosSuperheroesController(req, res) {
    const heroes = await obtenerTodosLosSuperheroes();
    res.render('dashboard', { heroes });
}

// Etapa 3: Formulario y lógica de agregar
export function renderizarFormularioAgregar(req, res) {
    res.render('addSuperhero');
}

export async function agregarSuperheroeController(req, res) {
    await agregarSuperheroe(req.body);
    res.redirect('/heroes');
}

// Etapa 4: Formulario y lógica de edición
export async function renderizarFormularioEditar(req, res) {
    const heroe = await obtenerSuperheroePorId(req.params.id);
    res.render('editSuperhero', { heroe });
}

export async function editarSuperheroeController(req, res) {
    await actualizarSuperheroe(req.params.id, req.body);
    res.redirect('/heroes');
}

// Etapa 5: Lógica de eliminación
export async function eliminarSuperheroeController(req, res) {
    await eliminarSuperheroe(req.params.id);
    res.redirect('/heroes');
}