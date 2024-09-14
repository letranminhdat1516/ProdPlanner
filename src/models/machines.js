const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('machines', {
    machine_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Available"
    }
  }, {
    sequelize,
    tableName: 'machines',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__machines__7B75BEA9BCFB548D",
        unique: true,
        fields: [
          { name: "machine_id" },
        ]
      },
    ]
  });
};
