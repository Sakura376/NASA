// controllers/productRatingController.js

const { ProductRating, User, Product } = require('../Models');

exports.getAllRatings = async (req, res) => {
    try {
        const ratings = await ProductRating.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['user_id', 'username']
                },
                {
                    model: Product,
                    as: 'product',
                    attributes: ['product_id', 'title']
                }
            ]
        });
        res.json(ratings);
    } catch (error) {
        console.error('Error al obtener las calificaciones:', error);
        res.status(500).json({ error: 'Error al obtener las calificaciones' });
    }
};

exports.createRating = async (req, res) => {
    try {
        const { product_id, user_id, rating_value, comment } = req.body;

        // Validaciones básicas
        if (!product_id || !user_id || !rating_value) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        // Verificar que el usuario y el producto existen
        const user = await User.findByPk(user_id);
        const product = await Product.findByPk(product_id);

        if (!user) {
            return res.status(400).json({ error: 'Usuario no válido' });
        }

        if (!product) {
            return res.status(400).json({ error: 'Producto no válido' });
        }

        // Verificar si ya existe una calificación para este usuario y producto
        const existingRating = await ProductRating.findOne({
            where: { product_id, user_id }
        });

        if (existingRating) {
            // Actualizar la calificación existente
            existingRating.rating = rating_value;
            existingRating.comment = comment;
            await existingRating.save();

            return res.status(200).json({
                message: 'Calificación actualizada',
                rating: existingRating
            });
        }

        // Crear una nueva calificación si no existe una previa
        const newRating = await ProductRating.create({
            product_id,
            user_id,
            rating: rating_value,
            comment
        });

        res.status(201).json({
            message: 'Calificación creada',
            rating: newRating
        });
    } catch (error) {
        console.error('Error al crear o actualizar la calificación:', error);
        res.status(500).json({ error: 'Error al crear o actualizar la calificación' });
    }
};


// controllers/productRatingController.js


exports.getRatedProductsByUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const ratedProducts = await ProductRating.findAll({
            where: { user_id: userId },
            include: [{
                model: Product,
                as: 'product', // Usa el alias correcto en la relación
                attributes: ['product_id', 'title', 'description', 'price', 'image_url'] // Cambia 'id' a 'product_id'
            }]
        });

        res.json(ratedProducts);
    } catch (error) {
        console.error('Error al obtener productos calificados:', error);
        res.status(500).json({ error: 'Error al obtener productos calificados' });
    }
};

exports.getUserRatingForProduct = async (req, res) => {
    const { userId, productId } = req.params;
  
    try {
      const rating = await ProductRating.findOne({
        where: { user_id: userId, product_id: productId }
      });
  
      if (rating) {
        res.json({ rating: rating.rating });
      } else {
        res.status(404).json({ error: 'No rating found for this product and user' });
      }
    } catch (error) {
      console.error("Error al obtener la calificación:", error);
      res.status(500).json({ error: 'Error al obtener la calificación' });
    }
  };
  
  // controllers/orderDetailController.js

exports.deleteOrderDetail = async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const deletedRows = await OrderDetail.destroy({
            where: { user_id: userId, product_id: productId }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
        }

        res.json({ message: 'Producto eliminado del carrito' });
    } catch (error) {
        console.error('Error al eliminar el producto del carrito:', error);
        res.status(500).json({ error: 'Error al eliminar el producto del carrito' });
    }
};

// Puedes añadir más métodos como updateRating, deleteRating, etc.
