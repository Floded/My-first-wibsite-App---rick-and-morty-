const data = require("../utils/users")

function login(req,res){
    const { email, password } = req.query;
    try {
        const found = data.find(user => user.email === email && user.password === password);
        res
        .status(200)
        .json({acces: found});
    } catch (error) {
        res.status(500).json({acces: false})
    }
}

module.exports = login;