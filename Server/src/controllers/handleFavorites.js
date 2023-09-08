let myFavorites = [];

function postFav(req, res){
    const favorite = req.body;
    myFavorites.push(favorite);
    res.status(200).send(myFavorites);
}

function deleteFav(req, res){
    const {id} = req.params;
    myFavorites = myFavorites.filter(favorite => favorite.id !== +id)
    res.status(200).send(myFavorites)
}

module.exports = {postFav, deleteFav}