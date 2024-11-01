// testOrder.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = require('../ConexionMySql/db'); // Ajusta la ruta según tu estructura
const Order = require('../../Models/orderFinal'); // Ajusta la ruta según tu estructura

// Función principal para ejecutar las pruebas
async function testOrderModel() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // **Crear** un nuevo registro
        const newOrder = await Order.create({
            user_id: 1,
            order_detail_id: 2,
            total: 199.99,
            order_date: new Date()
        });
        console.log('Nuevo Order creado:', newOrder.toJSON());

        // **Leer** registros existentes
        const orders = await Order.findAll();
        console.log('Orders encontrados:', orders.map(order => order.toJSON()));

        // **Actualizar** un registro existente
        await Order.update(
            { total: 299.99 },
            { where: { id: newOrder.id } }
        );
        console.log('Order actualizado.');

        // Verificar la actualización
        const updatedOrder = await Order.findByPk(newOrder.id);
        console.log('Registro actualizado:', updatedOrder.toJSON());

        // **Eliminar** un registro
        await Order.destroy({ where: { id: newOrder.id } });
        console.log('Order eliminado.');

        // Cerrar la conexión
        await db.close();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la prueba del modelo Order:', error);
    }
}

// Ejecutar la función de prueba
testOrderModel();
