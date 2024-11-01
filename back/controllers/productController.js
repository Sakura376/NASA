// controllers/productController.js

const Product = require('../Models/product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const {
            title,
            type,
            description,
            info_description,
            characteristics,
            image_url,
            info_image_url,
            price
        } = req.body;

        // Validaciones básicas
        if (!title || !price) {
            return res.status(400).json({ error: 'El título y el precio son obligatorios' });
        }

        const newProduct = await Product.create({
            title,
            type,
            description,
            info_description,
            characteristics,
            image_url,
            info_image_url,
            price
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const {
            title,
            type,
            description,
            info_description,
            characteristics,
            image_url,
            info_image_url,
            price
        } = req.body;

        const productId = req.params.id;

        // Verifica si el producto existe
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        // Actualiza el producto
        await Product.update(
            {
                title,
                type,
                description,
                info_description,
                characteristics,
                image_url,
                info_image_url,
                price
            },
            { where: { product_id: productId } }
        );

        // Obtiene el producto actualizado
        const updatedProduct = await Product.findByPk(productId);

        res.json(updatedProduct);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        // Verifica si el producto existe
        const product = await Product.findByPk(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        // Elimina el producto
        await Product.destroy({ where: { product_id: productId } });

        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};

