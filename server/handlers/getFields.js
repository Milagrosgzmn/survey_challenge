const getAllFields = require('../controllers/getAllFields');

const getFields = async(req, res)=>{

    try {
       
    const fields = await getAllFields(); 

    return fields? res.status(200).json(fields) :
     res.status(400).send('Could not get Fields');

    } catch (error) {
        res.status(500).json({error:error.message});
    }
};

module.exports= getFields;
