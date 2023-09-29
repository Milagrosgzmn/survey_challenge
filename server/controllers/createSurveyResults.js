const {Responses} = require('../DB_connection');

const createSurveyResults = async(req)=>{
    const {responses} = req.body;
    const stringToBoolean = responses.newsletter_subscription === 'true';
    try {
        if(responses){
            const newResponse = await Responses.create({
                ...responses,
                newsletter_subscription: stringToBoolean,
            });
            return newResponse;  
        }
        return false;
        
    } catch (error) {
        console.error('Could not save results', error.message);
        return false;
    }
};

module.exports=createSurveyResults;