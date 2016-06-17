'use strict';
module.exports = function(sequelize, DataTypes) {
  var pokemon = sequelize.define('pokemon', {
    pokeName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pokemon;
};