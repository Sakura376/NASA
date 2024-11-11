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

// controllers/orderDetailController.js

// controllers/orderDetailController.js
exports.createOrderDetail = async (req, res) => {
    try {
        const { user_id, items } = req.body;

        if (!user_id || !items || items.length === 0) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        const orderDetails = await Promise.all(
            items.map(async (item) => {
                const existingOrderDetail = await OrderDetail.findOne({
                    where: { user_id, product_id: item.product_id }
                });

                if (existingOrderDetail) {
                    // Si el producto ya está en el carrito, actualizamos la cantidad
                    existingOrderDetail.quantity += item.quantity;
                    await existingOrderDetail.save();
                    return existingOrderDetail;
                } else {
                    // Si no existe, creamos un nuevo detalle de orden
                    return OrderDetail.create({
                        user_id,
                        product_id: item.product_id,
                        quantity: item.quantity,
                        price: item.price
                    });
                }
            })
        );

        res.status(201).json(orderDetails);
    } catch (error) {
        console.error('Error al crear los detalles de la orden:', error);
        res.status(500).json({ error: 'Error al crear los detalles de la orden' });
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
        const { userId, productId } = req.params;

        // Busca el detalle del pedido según user_id y product_id
        const orderDetail = await OrderDetail.findOne({
            where: {
                user_id: userId,
                product_id: productId
            }
        });

        // Si no se encuentra el detalle, envía un error 404
        if (!orderDetail) {
            return res.status(404).json({ error: 'Detalle de la orden no encontrado' });
        }

        // Elimina el detalle del pedido
        await OrderDetail.destroy({
            where: {
                user_id: userId,
                product_id: productId
            }
        });

        res.json({ message: 'Detalle de la orden eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el detalle de la orden:', error);
        res.status(500).json({ error: 'Error al eliminar el detalle de la orden' });
    }
};

