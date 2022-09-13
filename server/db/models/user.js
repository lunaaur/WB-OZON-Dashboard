'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    API_x64_WB: DataTypes.STRING,
    API_x32_WB: DataTypes.STRING,
    Personal_API_WB: DataTypes.STRING,
    API_OZ: DataTypes.STRING,
    Client_ID_OZ: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};