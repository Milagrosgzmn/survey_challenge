require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const ResponsesModel = require('./models/responses');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/survey`,
   { logging: false, native: false }
);

ResponsesModel(sequelize);

const {Responses} = sequelize.models;

module.exports = {
    Responses,
    conn: sequelize,
};
