const server = require('./app');
const { sequelize } = require('./DB_connection');


const PORT = 3001;

server.listen(PORT, () => {
   sequelize.sync({force:true})
   console.log(`Server raised in port: ${PORT}`);
})
