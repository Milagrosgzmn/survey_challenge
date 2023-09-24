const {Responses} = require('../DB_connection');

const createSurveyResults = async(req)=>{
    const {responses} = req.body;

    try {
        if(responses){
            const newResponse = await Responses.create(responses);
            return newResponse;  
        }
        return false;
        
    } catch (error) {
        console.error('Could not save results', error.message);
        return false;
    }
};

module.exports=createSurveyResults;