require('dotenv').config();
const axios = require('axios');
const url = process.env.URLBACK1 || 'http://localhost:5000/datos';

const getAllFields = async()=>{

    try {
        const {data} = await axios(url);
        if (data) {
            const nonEmptyObjects = data.items.filter((obj) => Object.keys(obj).length > 0);

        if (nonEmptyObjects.length > 0) {
            return nonEmptyObjects; 
        } else {
            return false;
        }
        }
    } catch (error) {
        console.error('Couldnt access survey', error.message);
        return false;
    }
};

module.exports = getAllFields;