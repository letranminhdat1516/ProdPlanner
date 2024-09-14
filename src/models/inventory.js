const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inventory', {
    material_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    material_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantity_in_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minimum_required: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inventory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__inventor__6BFE1D28F37554F7",
        unique: true,
        fields: [
          { name: "material_id" },
        ]
      },
    ]
  });
};
