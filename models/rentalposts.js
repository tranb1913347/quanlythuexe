'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentalposts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rentalposts.init({
    address: DataTypes.STRING,
    carID: DataTypes.INTEGER,
    ownerID: DataTypes.INTEGER,
    status: DataTypes.STRING,
    cost: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'rentalposts',
  });
  return rentalposts;
};