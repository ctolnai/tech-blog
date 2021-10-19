require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize('mysql://o48ec1esvnxl9086:lv8x4qyo4q9l07p7@en1ehf30yom7txe7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u7f4omn4gubzkc2j')
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
