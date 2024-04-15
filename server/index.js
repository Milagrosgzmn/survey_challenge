const server = require('./serverConfig');
const mainRouter = require('./routes/index');
const apiRouter = require('./api/index');
const {conn} = require('./DB_connection');

const PORT2 = process.env.PORT2 || 3000;
server.use('/survey', mainRouter);
server.use('/api',apiRouter);

conn.sync({force: false}).then(()=>{
    server.listen(PORT2, ()=>{
    
    console.log(`levantamos con exito el servidor en el puerto:${PORT2}`);
});
});
 