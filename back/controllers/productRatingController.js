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

        // Crear la calificación
        const newRating = await ProductRating.create({
            product_id,
            user_id,
            rating_value,
            comment
        });

        res.status(201).json(newRating);
    } catch (error) {
        console.error('Error al crear la calificación:', error);
        res.status(500).json({ error: 'Error al crear la calificación' });
    }
};

exports.getRatedProductsByUser = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const ratedProducts = await ProductRating.findAll({
        where: { user_id: userId },
        include: [{
          model: Product,
          attributes: ['id', 'title', 'description', 'price', 'imageUrl'] // Asegúrate de incluir los atributos que necesitas
        }]
      });
  
      res.json(ratedProducts);
    } catch (error) {
      console.error('Error al obtener productos calificados:', error);
      res.status(500).json({ error: 'Error al obtener productos calificados' });
    }
  };

// Puedes añadir más métodos como updateRating, deleteRating, etc.
