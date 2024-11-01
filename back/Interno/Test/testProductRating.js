// testRating.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = require('../ConexionMySql/db'); // Ajusta la ruta según tu estructura
const Rating = require('../../Models/productRating'); // Ajusta la ruta según tu estructura

// Función principal para ejecutar las pruebas
async function testRatingModel() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // **Crear** un nuevo rating
        const newRating = await Rating.create({
            product_id: 1, // Ajusta el ID según un producto existente
            user_id: 1,    // Ajusta el ID según un usuario existente
            // rating_date se establecerá automáticamente al valor actual
        });
        console.log('Nuevo Rating creado:', newRating.toJSON());

        // **Leer** ratings existentes
        const ratings = await Rating.findAll();
        console.log('Ratings encontrados:', ratings.map(rating => rating.toJSON()));

        // **Actualizar** un rating existente
        await Rating.update(
            { rating_date: new Date() }, // Actualizamos la fecha a la fecha y hora actual
            { where: { rating_id: newRating.rating_id } }
        );
        console.log('Rating actualizado.');

        // Verificar la actualización
        const updatedRating = await Rating.findByPk(newRating.rating_id);
        console.log('Rating actualizado:', updatedRating.toJSON());

        // **Eliminar** un rating
        await Rating.destroy({ where: { rating_id: newRating.rating_id } });
        console.log('Rating eliminado.');

        // Cerrar la conexión
        await db.close();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la prueba del modelo Rating:', error);
    }
}

// Ejecutar la función de prueba
testRatingModel();
