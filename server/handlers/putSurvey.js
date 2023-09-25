const modifySurveyResult = require('../controllers/modifySurveyResult');

const putSurvey = async (req, res)=>{
    try {
        const updated = await modifySurveyResult(req);
        return updated ?
        res.status(200).send('updated') :
        res.status(400).send('Error updating');
    } catch (error) {
        return res.status(500).send('Error updating')
    }
};

module.exports = putSurvey;