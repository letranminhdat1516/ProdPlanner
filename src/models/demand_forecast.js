const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('demand_forecast', {
    forecast_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'product_id'
      }
    },
    forecasted_quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    forecast_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'demand_forecast',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__demand_f__9E57315427E153E8",
        unique: true,
        fields: [
          { name: "forecast_id" },
        ]
      },
      {
        name: "PK__demand_forecast",
        unique: true,
        fields: [
          { name: "forecast_id" },
        ]
      },
    ]
  });
};
