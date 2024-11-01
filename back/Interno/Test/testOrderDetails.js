// testOrderDetail.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = require('../ConexionMySql/db'); // Ajusta la ruta según tu estructura
const OrderDetail = require('../../Models/orderDetail'); // Ajusta la ruta según tu estructura

// Función principal para ejecutar las pruebas
async function testOrderDetailModel() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // Sincronizar el modelo con la base de datos (solo para desarrollo)
        // await OrderDetail.sync({ force: true }); // Cuidado: esto borrará la tabla si existe
        // console.log('Modelo OrderDetail sincronizado.');

        // **Crear** un nuevo registro
        const newOrderDetail = await OrderDetail.create({
            user_id: 1,
            product_id: 2,
            quantity: 5,
            price: 99.99
        });
        console.log('Nuevo OrderDetail creado:', newOrderDetail.toJSON());

        // **Leer** registros existentes
        const orderDetails = await OrderDetail.findAll();
        console.log('OrderDetails encontrados:', orderDetails.map(od => od.toJSON()));

        // **Actualizar** un registro existente
        const updatedOrderDetail = await OrderDetail.update(
            { quantity: 10 },
            { where: { order_detail_id: newOrderDetail.order_detail_id } }
        );
        console.log('OrderDetail actualizado:', updatedOrderDetail);

        // Verificar la actualización
        const updatedRecord = await OrderDetail.findByPk(newOrderDetail.order_detail_id);
        console.log('Registro actualizado:', updatedRecord.toJSON());

        // **Eliminar** un registro
        await OrderDetail.destroy({ where: { order_detail_id: newOrderDetail.order_detail_id } });
        console.log('OrderDetail eliminado.');

        // Cerrar la conexión
        await db.close();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la prueba del modelo OrderDetail:', error);
    }
}

// Ejecutar la función de prueba
testOrderDetailModel();
