const {Router} = require('express');
const fs = require('fs');
const apiRouter = Router();
const jsonFile = './api/fields.json';

apiRouter.get('/datos', (req, res) => {
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

module.exports = apiRouter;