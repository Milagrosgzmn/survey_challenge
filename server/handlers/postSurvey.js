const createSurveyResults = require('../controllers/createSurveyResults');

const postSurvey = async(req, res)=>{
    try {
        const created = await createSurveyResults(req);

        return created? res.status(200).json(created) :
        res.status(400).send('Error saving');
    } catch (error) {
        res.status(500).send('Error saving');
    }
};
module.exports = postSurvey;