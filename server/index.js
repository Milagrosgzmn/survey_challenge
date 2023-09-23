const dotenv = require('dotenv');

const server = require('./serverConfig');
const mainRouter = require('./routes/index');
const {conn} = require('./DB_connection');

dotenv.config();

const PORT = process.env.PORT || 3001; 

server.use('/survey', mainRouter);

conn.sync({force: false}).then(()=>{
    server.listen(PORT, ()=>{
    
    console.log(`levantamos con exito el servidor en el puerto:${PORT}`);
});
});
 