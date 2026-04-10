const conectarDB = require('./config/db');
const repository = require('./repository/superheroRepository');

async function iniciarApp() {
    // 1. Conectamos a la base de datos [cite: 73]
    await conectarDB();

    try {
        // 2. Ejemplo: Ver todos los héroes [cite: 175]
        const lista = await repository.obtenerTodos();
        console.log('Lista de Superhéroes:', lista);

        // 3. Ejemplo: Actualizar edad de Spiderman [cite: 181]
        await repository.actualizarEdad('Spiderman', 26);
        console.log('Edad de Spiderman actualizada.');

    } catch (error) {
        console.error('Ocurrió un error en la ejecución:', error);
    }
}

iniciarApp();