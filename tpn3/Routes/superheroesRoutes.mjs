import express from 'express';
const router = express.Router();
import {
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    buscarSuperheroePorAtributoController,
    obtenerSuperheroeMayorDeEdadController
} from '../controllers/superheroesController.mjs';

// API Endpoints
router.get('/', obtenerTodosLosSuperheroesController);
router.get('/buscar/:atributo/:valor', buscarSuperheroePorAtributoController);
router.get('/mayores/:edad', obtenerSuperheroeMayorDeEdadController);
router.get('/:id', obtenerSuperheroePorIdController);

export default router;