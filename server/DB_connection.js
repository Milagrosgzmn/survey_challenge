require('dotenv').configDotenv()
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,DB_PORTDB,  DATABASE_URL } = process.env;
const PORT = DB_PORTDB || 5432;
const conection =  DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const ResponsesModel = require('./models/responses');

const sequelize = new Sequelize(`${conection}`,
   { logging: false, native: false, ssl:true }
);

ResponsesModel(sequelize);

const {Responses} = sequelize.models;

module.exports = {
    Responses,
    conn: sequelize,
};
