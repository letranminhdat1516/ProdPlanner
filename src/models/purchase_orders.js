const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_orders', {
    po_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'suppliers',
        key: 'supplier_id'
      }
    },
    material_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'inventory',
        key: 'material_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Ordered"
    }
  }, {
    sequelize,
    tableName: 'purchase_orders',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__purchase__368DA7F00887919D",
        unique: true,
        fields: [
          { name: "po_id" },
        ]
      },
    ]
  });
};
