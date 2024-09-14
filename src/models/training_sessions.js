const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('training_sessions', {
    session_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    session_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    session_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    worker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'workers',
        key: 'worker_id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'training_sessions',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__training__69B13FDC880289D5",
        unique: true,
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
