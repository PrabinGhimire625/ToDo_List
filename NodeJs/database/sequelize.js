// connection/sequelize.js
import { Sequelize } from 'sequelize';

//dbName, dbUser, dbPassword, dbHost
const sequelize = new Sequelize('ToDOList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Disable logging
});


//function to show the messages
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectToDatabase();

export default sequelize;
