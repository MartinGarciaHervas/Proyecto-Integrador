const axios = require('axios')

module.exports = function getCharById (res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((response)=>{
        const character = response.data;
        res.writeHead(200, {
            'Content-Type':'application/json'
        })
        res.end(JSON.stringify(character))
    }).catch((error)=>{
        res.writeHead(500, {
            'Content-Type':'text/plain'
        })
        res.end(error.message) //los errores son objetos, y tienen una propiedad que se llama message
    })
}