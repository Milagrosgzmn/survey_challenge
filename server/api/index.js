const server = require('../serverConfig');
const fs = require('fs');

const jsonFile = './api/fields.json';

server.get('/datos', (req, res) => {
  fs.readFile(jsonFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      return res.status(200).json(jsonData);

    } catch (error) {
      console.error('Error al analizar el archivo JSON:', error);
      res.status(500).json({ error: 'Error al analizar el archivo JSON' });
    }
  });
});

module.exports = {
server2: server,
}