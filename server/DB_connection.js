require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORTDB, DB_URL } = process.env;
const PORT = DB_PORTDB || 5432;
const ResponsesModel = require('./models/responses');
const conection = DB_URL || {
    dialect: 'postgres',
  host: DB_HOST,
  port: PORT, 
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
}
const sequelize = new Sequelize(conection);

ResponsesModel(sequelize);

const {Responses} = sequelize.models;

module.exports = {
    Responses,
    conn: sequelize,
};
