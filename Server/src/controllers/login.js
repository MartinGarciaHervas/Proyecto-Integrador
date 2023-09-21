const { User } = require('../DB_connection');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (email && password) {
            const user = await User.findAll({ where: { email: email, password: password } });
            if (user.length) {
                return res.status(200).json({ access: true })
            }
            return res.status(404).json('Usuario no encontrado')
        }
        return res.staus(400).json('Faltan datos')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = login