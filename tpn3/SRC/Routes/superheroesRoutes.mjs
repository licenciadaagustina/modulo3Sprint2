import express from 'express';
const router = express.Router();
import {
    obtenerTodosLosSuperheroesController,
    renderizarFormularioAgregar,
    agregarSuperheroeController,
    renderizarFormularioEditar,
    editarSuperheroeController,
    eliminarSuperheroeController
} from '../controllers/superheroesController.mjs';

// Etapa 2: Listar héroes
router.get('/', obtenerTodosLosSuperheroesController);

// Etapa 3: Agregar héroes
router.get('/agregar', renderizarFormularioAgregar);
router.post('/agregar', agregarSuperheroeController);

// Etapa 4: Editar héroes
router.get('/:id/editar', renderizarFormularioEditar);
router.put('/:id/editar', editarSuperheroeController);

// Etapa 5: Eliminar héroes
router.delete('/:id/eliminar', eliminarSuperheroeController);

export default router;