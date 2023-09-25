const getResults = require('../controllers/getResults');

const getSurveyResults = async(req, res)=>{
    try {
        const results = await getResults(req);

        return results? res.status(200).json(results) :
        res.status(400).send('Could not get Results');
   
    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports = getSurveyResults;

