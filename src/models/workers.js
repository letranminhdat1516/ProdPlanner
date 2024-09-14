const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workers', {
    worker_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    worker_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    skill_level: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'workers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__workers__569F8007787E6033",
        unique: true,
        fields: [
          { name: "worker_id" },
        ]
      },
    ]
  });
};
