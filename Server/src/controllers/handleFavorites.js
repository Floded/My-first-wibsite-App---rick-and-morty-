let myFavorites = [];

function postFav(req, res){
    const { character } = req.body;
    console.log(character);

    try {
        myFavorites.push(character);

        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

function deleteFav(req, res){
    const { id } = req.params;
    
    try {
        const characterFiltered = myFavorites.filter((character) => character.id !== Number(id));
        res.status(200).json(characterFiltered)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {postFav, deleteFav}