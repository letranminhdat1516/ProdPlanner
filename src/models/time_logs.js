const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_logs', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    worker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'workers',
        key: 'worker_id'
      }
    },
    log_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hours_worked: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'time_logs',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__time_log__9E2397E0D3932297",
        unique: true,
        fields: [
          { name: "log_id" },
        ]
      },
    ]
  });
};
