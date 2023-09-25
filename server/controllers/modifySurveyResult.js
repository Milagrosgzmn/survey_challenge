const {Responses} = require('../DB_connection');

const modifySurveyResult = async(req)=>{
    const {update, id} = req.body;
    try {
        if (update && id) {
            const newResults = await Responses.update(update, {
                where:{
                    id: id,
                }
            });
            return newResults[0] > 0 ? true : false;
        }
        return false;
    } catch (error) {
        console.error('Error updating');
        return false;
    }

};
module.exports = modifySurveyResult;