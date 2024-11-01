// testUser.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = require('../ConexionMySql/db'); // Ajusta la ruta según tu estructura
const User = require('../../Models/user'); // Ajusta la ruta según tu estructura

// Función principal para ejecutar las pruebas
async function testUserModel() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // **Crear** un nuevo usuario
        const newUser = await User.create({
            username: 'usuario_prueba',
            email: 'usuario_prueba@example.com',
            password: 'contraseña_segura',
            created_at: new Date()
        });
        console.log('Nuevo usuario creado:', newUser.toJSON());

        // **Leer** usuarios existentes
        const users = await User.findAll();
        console.log('Usuarios encontrados:', users.map(user => user.toJSON()));

        // **Actualizar** un usuario existente
        await User.update(
            { email: 'nuevo_email@example.com' },
            { where: { user_id: newUser.user_id } }
        );
        console.log('Usuario actualizado.');

        // Verificar la actualización
        const updatedUser = await User.findByPk(newUser.user_id);
        console.log('Usuario actualizado:', updatedUser.toJSON());

        // **Eliminar** un usuario
        await User.destroy({ where: { user_id: newUser.user_id } });
        console.log('Usuario eliminado.');

        // Cerrar la conexión
        await db.close();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la prueba del modelo User:', error);
    }
}

// Ejecutar la función de prueba
testUserModel();
