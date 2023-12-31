const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        await Favorite.destroy({ where: { id: id } });
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteFav;