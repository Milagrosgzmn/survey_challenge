const {Responses} = require('../DB_connection');

const getResults = async(req)=>{
    const {id, phone_number, full_name} = req.body
   try {
        let survey;
        if (id) {
            survey = await Responses.findByPk(id)
        }
        if(full_name && phone_number){
        survey = await Responses.findOne({where:{phone_number, full_name}});
        }

        return survey ? survey : false;
   } catch (error) {

        console.error('Could not get Results', error.message);
        return false;
   }

};
module.exports = getResults;