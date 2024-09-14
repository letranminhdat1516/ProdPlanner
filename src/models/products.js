const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__products__47027DF54A3890D9",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
