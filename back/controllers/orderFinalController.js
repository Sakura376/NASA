// controllers/orderController.js

// controllers/orderFinalController.js

const { OrderFinal, User, OrderDetail, Product } = require('../Models');
console.log('OrderFinal:', OrderFinal);

exports.getAllOrders = async (req, res) => {
    try {
        const ordersFinal = await OrderFinal.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['user_id', 'username', 'email']
                },
                {
                    model: OrderDetail,
                    as: 'orderDetails',
                    include: [
                        {
                            model: Product,
                            as: 'product',
                            attributes: ['product_id', 'title', 'price']
                        }
                    ]
                }
            ]
        });
        res.json(ordersFinal);
    } catch (error) {
        console.error('Error al obtener las órdenes:', error);
        res.status(500).json({ error: 'Error al obtener las órdenes' });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await OrderFinal.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['user_id', 'username', 'email']
                },
                {
                    model: OrderDetail,
                    as: 'orderDetails',
                    include: [
                        {
                            model: Product,
                            as: 'product',
                            attributes: ['product_id', 'title', 'price']
                        }
                    ]
                }
            ]
        });
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ error: 'Orden no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la orden:', error);
        res.status(500).json({ error: 'Error al obtener la orden' });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const { user_id, orderDetails } = req.body;

        // Validaciones básicas
        if (!user_id || !orderDetails || !Array.isArray(orderDetails)) {
            return res.status(400).json({ error: 'Datos inválidos' });
        }

        // Verificar que el usuario existe
        const user = await User.findByPk(user_id);
        if (!user) {
            return res.status(400).json({ error: 'Usuario no válido' });
        }

        // Crear la orden
        const newOrder = await OrderFinal.create({
            user_id,
            total: 0 // Se actualizará después
        });

        let totalOrder = 0;

        // Crear los detalles de la orden
        for (const detail of orderDetails) {
            const { product_id, quantity, price } = detail;

            // Validar datos
            if (!product_id || !quantity || !price) {
                return res.status(400).json({ error: 'Datos de detalle inválidos' });
            }

            // Verificar que el producto existe
            const product = await Product.findByPk(product_id);
            if (!product) {
                return res.status(400).json({ error: `Producto no válido: ${product_id}` });
            }

            // Crear el detalle de la orden
            await OrderDetail.create({
                order_id: newOrder.order_id,
                product_id,
                quantity,
                price
            });

            totalOrder += quantity * price;
        }

        // Actualizar el total de la orden
        await OrderFinal.update(
            { total: totalOrder },
            { where: { order_id: newOrder.order_id } }
        );

        // Obtener la orden con detalles
        const createdOrder = await OrderFinal.findByPk(newOrder.order_id, {
            include: [
                {
                    model: OrderDetail,
                    as: 'orderDetails',
                    include: [{ model: Product, as: 'product' }]
                }
            ]
        });

        res.status(201).json(createdOrder);
    } catch (error) {
        console.error('Error al crear la orden:', error);
        res.status(500).json({ error: 'Error al crear la orden' });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { total } = req.body;

        const order = await OrderFinal.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }

        await OrderFinal.update(
            { total },
            { where: { order_id: id } }
        );

        const updatedOrder = await OrderFinal.findByPk(id);

        res.json(updatedOrder);
    } catch (error) {
        console.error('Error al actualizar la orden:', error);
        res.status(500).json({ error: 'Error al actualizar la orden' });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        const order = await OrderFinal.findByPk(id);
        if (!order) {
            return res.status(404).json({ error: 'Orden no encontrada' });
        }

        // Eliminar detalles de la orden
        await OrderDetail.destroy({ where: { order_id: id } });

        // Eliminar la orden
        await OrderFinal.destroy({ where: { order_id: id } });

        res.json({ message: 'Orden eliminada correctamente' });
    } catch (error) {
        console.error('Error al eliminar la orden:', error);
        res.status(500).json({ error: 'Error al eliminar la orden' });
    }
};
