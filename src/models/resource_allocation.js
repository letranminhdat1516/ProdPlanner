const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_allocation', {
    allocation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'production_plan',
        key: 'plan_id'
      }
    },
    machine_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'machines',
        key: 'machine_id'
      }
    },
    worker_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'workers',
        key: 'worker_id'
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
    quantity_allocated: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resource_allocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__resource__5DFAFF30A489E505",
        unique: true,
        fields: [
          { name: "allocation_id" },
        ]
      },
    ]
  });
};
