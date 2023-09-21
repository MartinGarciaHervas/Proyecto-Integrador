const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body;
        if (id && name && origin && status && image && species && gender) {
            await Favorite.findOrCreate({ where: { id:id, name:name, origin:origin, status:status, image:image, species:species, gender:gender }, defaults: { id, name, origin, status, image, species, gender } });
            const favorites = await Favorite.findAll();
            return res.status(200).json(favorites)
        }
        return res.status(400).json('Faltan datos');
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

module.exports = postFav