// controllers/orderDetailController.js

const { OrderDetail, User, Product } = require('../Models');

// controllers/orderDetailController.js

exports.getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await OrderDetail.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['user_id', 'username', 'email']
                },
                {
                    model: Product,
                    as: 'product',
                    attributes: ['product_id', 'title', 'price']
                }
            ]
        });
        res.json(orderDetails);
    } catch (error) {
        console.error('Error al obtener los detalles de la orden:', error);
        res.status(500).json({ error: 'Error al obtener los detalles de la orden' });
    }
};

exports.getOrderDetailById = async (req, res) => {
    try {
        const { id } = req.params;
        const orderDetail = await OrderDetail.findByPk(id, {
            include: [
                { model: User, as: 'user', attributes: ['user_id', 'username', 'email'] },
                { model: Product, as: 'product', attributes: ['product_id', 'title', 'price'] }
            ]
        });
        if (orderDetail) {
            res.json(orderDetail);
        } else {
            res.status(404).json({ error: 'Detalle de la orden no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el detalle de la orden:', error);
        res.status(500).json({ error: 'Error al obtener el detalle de la orden' });
    }
};

exports.createOrderDetail = async (req, res) => {
    try {
        const { user_id, product_id, quantity, price } = req.body;

        // Validaciones básicas
        if (!user_id || !product_id || !quantity || !price) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Verificar que el usuario existe
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'Usuario no válido' });
        }

        // Verificar que el producto existe
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(400).json({ error: 'Producto no válido' });
        }

        const newOrderDetail = await OrderDetail.create({
            user_id,
            product_id,
            quantity,
            price
        });
        res.status(201).json(newOrderDetail);
    } catch (error) {
        console.error('Error al crear el detalle de la orden:', error);
        res.status(500).json({ error: 'Error al crear el detalle de la orden' });
    }
};

exports.updateOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const { quantity, price } = req.body;

        const orderDetail = await OrderDetail.findByPk(id);
        if (!orderDetail) {
            return res.status(404).json({ error: 'Detalle de la orden no encontrado' });
        }

        await OrderDetail.update(
            { quantity, price },
            { where: { order_detail_id: id } }
        );

        const updatedOrderDetail = await OrderDetail.findByPk(id);
        res.json(updatedOrderDetail);
    } catch (error) {
        console.error('Error al actualizar el detalle de la orden:', error);
        res.status(500).json({ error: 'Error al actualizar el detalle de la orden' });
    }
};

exports.deleteOrderDetail = async (req, res) => {
    try {
        const { id } = req.params;

        const orderDetail = await OrderDetail.findByPk(id);
        if (!orderDetail) {
            return res.status(404).json({ error: 'Detalle de la orden no encontrado' });
        }

        await OrderDetail.destroy({ where: { order_detail_id: id } });
        res.json({ message: 'Detalle de la orden eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el detalle de la orden:', error);
        res.status(500).json({ error: 'Error al eliminar el detalle de la orden' });
    }
};
