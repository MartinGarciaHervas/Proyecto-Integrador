const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            await User.findOrCreate({ where: { email:email, password:password }, defaults: { email, password } });
            return res.status(200).json('Registrado con exito!')
        }
        return res.status(400).json('Faltan datos')
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = postUser