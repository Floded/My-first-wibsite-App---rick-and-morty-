const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res){
    const { id } = req.params;
    console.log(id);
    try {
        axios.get(`${URL}${id}`).then(response => {
            const { id, name, image, gender, species } = response.data
            res.status(200).json({ id, name, image, gender, species })
        })
    } catch (error){
        res.status(500).json({message: error.message})
    };
};

module.exports = {getCharById};