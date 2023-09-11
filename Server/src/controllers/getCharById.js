// const axios = require('axios')

// module.exports = function getCharById (res, id) {
//     axios(`https://rickandmortyapi.com/api/character/${id}`).then((response)=>{
//         const character = response.data;
//         res.writeHead(200, {
//             'Content-Type':'application/json'
//         })
//         res.end(JSON.stringify(character))
//     }).catch((error)=>{
//         res.writeHead(500, {
//             'Content-Type':'text/plain'
//         })
//         res.end(error.message) //los errores son objetos, y tienen una propiedad que se llama message
//     })
// }

const axios = require('axios');

async function getCharById (req, res){
    const {id} = req.params;
    try{
    const {data} = await axios(`https://rickandmortyapi.com/api/character/${id}`);

        if(data.name){
            res.status(200).send(data)
        } else {
           return res.status(404).send('Not Found')
        }
    }catch{(error)=>{
        res.status(500).send(error.message)
    }}
};

module.exports = getCharById;