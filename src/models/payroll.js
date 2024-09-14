const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll', {
    payroll_id: {
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
    pay_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total_hours: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    hourly_rate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    total_pay: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payroll',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__payroll__D99FC9444CD2B055",
        unique: true,
        fields: [
          { name: "payroll_id" },
        ]
      },
    ]
  });
};
