const http = require('http');
const getCharById = require('./controllers/getCharById')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req;
    const aux = url.split('/')
    const id = parseInt(aux.pop())
    if(url.includes('/rickandmorty/character')){
        getCharById(res, id)
    }

}).listen(3001);