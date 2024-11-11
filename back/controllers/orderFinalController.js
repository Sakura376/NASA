const { OrderFinal, User, OrderDetail, Product } = require('../Models');

exports.createOrder = async (req, res) => {
  const { user_id, total } = req.body;

  try {
    // Crear la orden en la base de datos
    const newOrder = await OrderFinal.create({
      user_id,
      total,
      order_date: new Date()
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
};

// Obtener todas las órdenes
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

// Obtener orden por ID
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

// Actualizar una orden
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

// Eliminar una orden
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
