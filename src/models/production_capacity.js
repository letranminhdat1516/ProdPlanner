const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('production_capacity', {
    capacity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    machine_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    available_hours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    capacity_per_hour: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'machines',
        key: 'machine_id'
      }
    }
  }, {
    sequelize,
    tableName: 'production_capacity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__producti__A8B020DB5FB96302",
        unique: true,
        fields: [
          { name: "capacity_id" },
        ]
      },
    ]
  });
};
