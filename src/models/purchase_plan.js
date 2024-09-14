const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_plan', {
    plan_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inventory',
        key: 'material_id'
      }
    },
    planned_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Planned"
    }
  }, {
    sequelize,
    tableName: 'purchase_plan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__purchase__BE9F8F1DE283FF37",
        unique: true,
        fields: [
          { name: "plan_id" },
        ]
      },
    ]
  });
};
