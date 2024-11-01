// testProduct.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const db = require('../ConexionMySql/db'); // Ajusta la ruta según tu estructura
const Product = require('../../Models/product');   // Ajusta la ruta según tu estructura

// Función principal para ejecutar las pruebas
async function testProductModel() {
    try {
        // Conectar a la base de datos
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');

        // **Crear** un nuevo producto
        const newProduct = await Product.create({
            title: 'Producto de prueba',
            type: 'Electrónica',
            description: 'Descripción del producto de prueba',
            info_description: 'Información adicional del producto de prueba',
            characteristics: 'Características del producto de prueba',
            image_url: 'http://example.com/image.jpg',
            info_image_url: 'http://example.com/info_image.jpg',
            price: 99.99
        });
        console.log('Nuevo producto creado:', newProduct.toJSON());

        // **Leer** productos existentes
        const products = await Product.findAll();
        console.log('Productos encontrados:', products.map(product => product.toJSON()));

        // **Actualizar** un producto existente
        await Product.update(
            { price: 89.99 },
            { where: { product_id: newProduct.product_id } }
        );
        console.log('Producto actualizado.');

        // Verificar la actualización
        const updatedProduct = await Product.findByPk(newProduct.product_id);
        console.log('Producto actualizado:', updatedProduct.toJSON());

        // **Eliminar** un producto
        await Product.destroy({ where: { product_id: newProduct.product_id } });
        console.log('Producto eliminado.');

        // Cerrar la conexión
        await db.close();
        console.log('Conexión a la base de datos cerrada.');
    } catch (error) {
        console.error('Error durante la prueba del modelo Product:', error);
    }
}

// Ejecutar la función de prueba
testProductModel();

