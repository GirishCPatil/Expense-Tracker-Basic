const {DataTypes} = require('sequelize');

const sequelize = require('../utils/database');

const Expense = sequelize.define('Expense', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
    expenseAmt: {
    type: DataTypes.INTEGER,
    allowNull: false,  
    },
    description: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    category: {
    type: DataTypes.STRING,
    allowNull: false,
    },
});

module.exports = Expense;