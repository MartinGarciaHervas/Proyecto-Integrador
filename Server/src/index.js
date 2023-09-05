const http = require('http');
const data = require('./utils/data')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;
    const aux = url.split('/')

    if(url.includes("/rickandmorty/character")){
        const id = parseInt(aux[aux.length - 1])
        const character = data.filter(character => character.id === id)[0]
        console.log(character);
        res.writeHead(200, {
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify(character))
    }

}).listen(3001);