var DataTypes = require("sequelize").DataTypes;
var _demand_forecast = require("./demand_forecast");
var _inventory = require("./inventory");
var _machines = require("./machines");
var _payroll = require("./payroll");
var _production_capacity = require("./production_capacity");
var _production_plan = require("./production_plan");
var _products = require("./products");
var _purchase_orders = require("./purchase_orders");
var _purchase_plan = require("./purchase_plan");
var _resource_allocation = require("./resource_allocation");
var _sales_orders = require("./sales_orders");
var _suppliers = require("./suppliers");
var _supply_chain_plan = require("./supply_chain_plan");
var _time_logs = require("./time_logs");
var _training_sessions = require("./training_sessions");
var _workers = require("./workers");

function initModels(sequelize) {
  var demand_forecast = _demand_forecast(sequelize, DataTypes);
  var inventory = _inventory(sequelize, DataTypes);
  var machines = _machines(sequelize, DataTypes);
  var payroll = _payroll(sequelize, DataTypes);
  var production_capacity = _production_capacity(sequelize, DataTypes);
  var production_plan = _production_plan(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var purchase_orders = _purchase_orders(sequelize, DataTypes);
  var purchase_plan = _purchase_plan(sequelize, DataTypes);
  var resource_allocation = _resource_allocation(sequelize, DataTypes);
  var sales_orders = _sales_orders(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);
  var supply_chain_plan = _supply_chain_plan(sequelize, DataTypes);
  var time_logs = _time_logs(sequelize, DataTypes);
  var training_sessions = _training_sessions(sequelize, DataTypes);
  var workers = _workers(sequelize, DataTypes);

  purchase_orders.belongsTo(inventory, { as: "material", foreignKey: "material_id"});
  inventory.hasMany(purchase_orders, { as: "purchase_orders", foreignKey: "material_id"});
  purchase_plan.belongsTo(inventory, { as: "material", foreignKey: "material_id"});
  inventory.hasMany(purchase_plan, { as: "purchase_plans", foreignKey: "material_id"});
  resource_allocation.belongsTo(inventory, { as: "material", foreignKey: "material_id"});
  inventory.hasMany(resource_allocation, { as: "resource_allocations", foreignKey: "material_id"});
  production_capacity.belongsTo(machines, { as: "machine", foreignKey: "machine_id"});
  machines.hasMany(production_capacity, { as: "production_capacities", foreignKey: "machine_id"});
  resource_allocation.belongsTo(machines, { as: "machine", foreignKey: "machine_id"});
  machines.hasMany(resource_allocation, { as: "resource_allocations", foreignKey: "machine_id"});
  resource_allocation.belongsTo(production_plan, { as: "plan", foreignKey: "plan_id"});
  production_plan.hasMany(resource_allocation, { as: "resource_allocations", foreignKey: "plan_id"});
  demand_forecast.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(demand_forecast, { as: "demand_forecasts", foreignKey: "product_id"});
  production_plan.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(production_plan, { as: "production_plans", foreignKey: "product_id"});
  sales_orders.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(sales_orders, { as: "sales_orders", foreignKey: "product_id"});
  supply_chain_plan.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(supply_chain_plan, { as: "supply_chain_plans", foreignKey: "product_id"});
  production_plan.belongsTo(sales_orders, { as: "order", foreignKey: "order_id"});
  sales_orders.hasMany(production_plan, { as: "production_plans", foreignKey: "order_id"});
  purchase_orders.belongsTo(suppliers, { as: "supplier", foreignKey: "supplier_id"});
  suppliers.hasMany(purchase_orders, { as: "purchase_orders", foreignKey: "supplier_id"});
  supply_chain_plan.belongsTo(suppliers, { as: "supplier", foreignKey: "supplier_id"});
  suppliers.hasMany(supply_chain_plan, { as: "supply_chain_plans", foreignKey: "supplier_id"});
  payroll.belongsTo(workers, { as: "worker", foreignKey: "worker_id"});
  workers.hasMany(payroll, { as: "payrolls", foreignKey: "worker_id"});
  resource_allocation.belongsTo(workers, { as: "worker", foreignKey: "worker_id"});
  workers.hasMany(resource_allocation, { as: "resource_allocations", foreignKey: "worker_id"});
  time_logs.belongsTo(workers, { as: "worker", foreignKey: "worker_id"});
  workers.hasMany(time_logs, { as: "time_logs", foreignKey: "worker_id"});
  training_sessions.belongsTo(workers, { as: "worker", foreignKey: "worker_id"});
  workers.hasMany(training_sessions, { as: "training_sessions", foreignKey: "worker_id"});

  return {
    demand_forecast,
    inventory,
    machines,
    payroll,
    production_capacity,
    production_plan,
    products,
    purchase_orders,
    purchase_plan,
    resource_allocation,
    sales_orders,
    suppliers,
    supply_chain_plan,
    time_logs,
    training_sessions,
    workers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
