// controllers/userController.js

const User = require('../Models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Validaciones básicas
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            created_at: new Date()
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username, email } = req.body;
        const userId = req.params.id;

        const [updatedRows] = await User.update(
            { username, email },
            { where: { user_id: userId } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const updatedUser = await User.findByPk(userId);
        res.json(updatedUser);
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedRows = await User.destroy({ where: { user_id: userId } });

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

