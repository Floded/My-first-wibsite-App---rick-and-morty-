const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/"

function getCharDetail(req, res){
    const { id } = req.params;
    try {
        axios.get(`${URL}${id}`).then(response => {
            const { id, name, image, gender, species, origin } = response.data
            res.status(200).json({ id, name, image, gender, species, origin })
        })
    } catch (error){
        res.status(500).json({message: error.message})
    };
}

module.exports = getCharDetail;