'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cars.init({
    company: DataTypes.STRING,
    numberOfSeat: DataTypes.INTEGER,
    name: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    image: DataTypes.STRING,
    ownerID: DataTypes.INTEGER,
    status: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cars',
  });
  return cars;
};