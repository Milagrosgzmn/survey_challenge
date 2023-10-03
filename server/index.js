require('dotenv').config();
const server = require('./serverConfig');
const mainRouter = require('./routes/index');
const {conn} = require('./DB_connection');
const {server2} = require('./api/index');

const PORT = process.env.PORT || 3001;
const PORT2 = process.env.PORT2 || 5000;
server.use('/survey', mainRouter);
server2.listen(PORT2, ()=>{
    
    console.log(`levantamos con exito el servidor en el puerto:${PORT2}`);
});
conn.sync({force: false}).then(()=>{
    server.listen(PORT, ()=>{
    
    console.log(`levantamos con exito el servidor en el puerto:${PORT}`);
});
});
 