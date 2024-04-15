const {Router} = require('express');
const getFields = require('../handlers/getFields');
const getSurveyResults = require('../handlers/getSurveyResults');
const postSurvey = require('../handlers/postSurvey');
const putSurvey = require('../handlers/putSurvey');
const deleteAllDataFromTable = require('../controllers/clearTable');

const mainRouter = Router();

//rutas
mainRouter.get('/fields', getFields);

mainRouter.get('/results', getSurveyResults);
mainRouter.post('/', postSurvey);
mainRouter.put('/update', putSurvey);

mainRouter.delete('/', deleteAllDataFromTable)

module.exports = mainRouter;