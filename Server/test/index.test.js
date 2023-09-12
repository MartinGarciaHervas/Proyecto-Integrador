const server = require('../src/app')
const session = require('supertest')

const agent = session(server)

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{

        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty('id', 'name', 'species', 'gender', 'status', 'origin', 'image')
        })

        it('Si hay un error responde con status: 500', async()=>{
            await agent.get('/rickandmorty/character/900').expect(500);
        })
    });

    describe('GET /rickandmorty/login', ()=>{

        it('Responde access:true si el usuario y contraseña son correctos', async()=>{
            const response = await agent.get('/rickandmorty/login/?email=prueba@gmail.com&password=prueba123')
            expect(response.text).toEqual("{\"access\":true}")
        })

        it('Responde access:false si el usuario y contraseña son incorrectos', async()=>{
            const response = await agent.get('/rickandmorty/login/?email=pepe@gmail.com&password=prueba1')
            expect(response.text).toEqual("{\"access\":false}")
        })
    })

    describe("POST /rickandmorty/fav", ()=>{
        it('Lo que este en "body", debe estar envuelto en un arreglo', async()=>{
            const response = await agent.post('/rickandmorty/fav', {})
            expect(response.body).toEqual([{}])
        })

        it('El elemento que envie, debe ser agregado a los ya existentes', async()=>{
            const [response] = [await agent.post('/rickandmorty/fav', {}), await agent.post('/rickandmorty/fav', {})]
            expect(response.body).toEqual([{},{}])
        })
    })

})