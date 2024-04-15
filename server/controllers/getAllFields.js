const axios = require('axios');
const url = process.env.URLBACK1 || 'http://localhost:3000/';

const getAllFields = async()=>{
    const myurl = `${url}api/datos`
    try {

        const {data} = await axios(myurl);
        if (data) {
            const nonEmptyObjects = data.items.filter((obj) => Object.keys(obj).length > 0);

        if (nonEmptyObjects.length > 0) {
            return nonEmptyObjects; 
        } else {
            return false;
        }
        }else{
            throw new Error('there s no data')
        }
    } catch (error) {
        console.error('Couldnt access survey', error.message);
        return false;
    }
};

module.exports = getAllFields;