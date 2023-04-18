const data = require("../utils/users")

function login(req,res){
    const { email, password } = req.query;
    // console.log(req.query);
    try {
        const found = data.find(user => user.email === email && user.password === password);
        res
        .status(200)
        .json({access: found});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {login};