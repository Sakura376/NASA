// controllers/orderController.js

// controllers/orderFinalController.js

const { OrderFinal, User, OrderDetail, Product } = require('../Models');
console.log('OrderFinal:', OrderFinal);
const twilio = require('twilio');
const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';

exports.createOrder = async (req, res) => {
    const { user_id, total } = req.body;
  
    try {
      // Crea el pedido en la base de datos
      const newOrder = await Order.create({
        user_id,
        total,
        order_date: new Date(),
      });
  
      // Obtener el número de WhatsApp del usuario (ajusta este código a tu estructura de usuario)
      const user = await User.findByPk(user_id);
      const userWhatsApp = user.whatsapp_number; // Asegúrate de que este campo esté en tu base de datos
  
      // Enviar mensaje de WhatsApp
      await client.messages.create({
        body: `Gracias por tu compra. Tu pedido de $${total.toFixed(2)} ha sido confirmado.`,
        from: 'whatsapp:+14155238886', // Número de Twilio para WhatsApp (ajusta según tu configuración)
        to: `whatsapp:${userWhatsApp}`, // Número del usuario
      });
  
      res.status(201).json(newOrder);
    } catch (error) {
      console.error('Error al crear el pedido o enviar mensaje de WhatsApp:', error);
      res.status(500).json({ error: 'Error al crear el pedido' });
    }
  };

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
  const { user_id, total } = req.body;

  try {
    const newOrder = await Order.create({
      user_id,
      total,
      order_date: new Date(), // Usamos la fecha actual para el pedido
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error al crear el pedido:', error);
    res.status(500).json({ error: 'Error al crear el pedido' });
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
