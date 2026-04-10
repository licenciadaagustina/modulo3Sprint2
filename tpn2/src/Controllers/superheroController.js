const SuperHero = require('../models/superhero');

// 1. Obtener todos los superhéroes de la Tierra [cite: 120, 175]
exports.obtenerSuperheroesTierra = async (req, res) => {
    try {
        const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ error: "Error al buscar héroes de la Tierra" });
    }
};

// 2. Buscar un superhéroe por su NOMBRE REAL (La que agregamos recién) [cite: 33, 174]
exports.buscarPorNombreReal = async (req, res) => {
    try {
        const nombreBusqueda = req.params.nombreReal;
        const heroe = await SuperHero.find({ nombreReal: nombreBusqueda });
        
        if (heroe.length === 0) {
            return res.status(404).json({ mensaje: "No se encontró un superhéroe con ese nombre real." });
        }
        res.json(heroe);
    } catch (error) {
        res.status(500).json({ error: "Error al realizar la búsqueda" });
    }
};

// 3. Crear un nuevo superhéroe [cite: 109, 163]
exports.crearSuperHeroe = async (req, res) => {
    try {
        const nuevoHeroe = await SuperHero.create(req.body);
        res.status(201).json(nuevoHeroe);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el héroe. Revisa los campos obligatorios." });
    }
};

// 4. Actualizar edad [cite: 123, 178]
exports.actualizarEdad = async (req, res) => {
    try {
        await SuperHero.updateOne(
            { nombreSuperHeroe: req.params.nombre },
            { $set: { edad: req.body.edad } }
        );
        res.send("Edad actualizada correctamente");
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar" });
    }
};

// 5. Eliminar un superhéroe [cite: 129, 183]
exports.eliminarHeroe = async (req, res) => {
    try {
        await SuperHero.deleteOne({ nombreSuperHeroe: req.params.nombre });
        res.send("Héroe eliminado de la base de datos");
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
};