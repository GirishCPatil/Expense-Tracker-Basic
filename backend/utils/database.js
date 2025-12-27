const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('expense_db', 'root', 'Girish@21', {
  host: 'localhost',
  dialect: 'mysql', // or 'mysql', 'sqlite', 'mariadb', 'mssql'
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();



module.exports = sequelize;