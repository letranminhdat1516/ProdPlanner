const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    supplier_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supplier_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    contact_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__supplier__6EE594E8981FC20F",
        unique: true,
        fields: [
          { name: "supplier_id" },
        ]
      },
    ]
  });
};
