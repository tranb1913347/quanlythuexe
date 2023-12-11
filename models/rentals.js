'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rentals.init({
    userID: DataTypes.INTEGER,
    carID: DataTypes.INTEGER,
    cost: DataTypes.FLOAT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    note: DataTypes.STRING,
    status: DataTypes.STRING,
    address: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rentals',
  });
  return rentals;
};