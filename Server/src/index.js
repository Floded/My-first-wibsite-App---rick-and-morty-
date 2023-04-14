const { log } = require("console");
const data = require("./utils/data");


const http = require("http");
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url);
    try {
        const { url } = req;
        if(url.includes("/rickandmorty/character")){
            const id = url.split("/").pop().at(-1)
            const character = data.find(chara => chara.id === Number(id))   
            console.log(character);
            res.writeHeader(200, {"Content-Type":"application/json"})
            res.end(JSON.stringify(character));
        }
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}).listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
}) 