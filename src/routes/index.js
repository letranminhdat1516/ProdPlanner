const express = require('express');
const router = express.Router();

// Import các routes
const salesOrderRoute = require('./salesOrder.routes');
const inventoryRoutes = require('./inventory.routes');
const productionCapacityRoutes = require('./productionCapacity.routes');
const demandForecastRoutes = require('./demandForecast.routes');
const productionPlanRoutes = require('./productionPlan.routes');
const resourceAllocationRoutes = require('./resourceAllocation.routes');
const workersRoutes = require('./workers.routes');
const suppliersRoutes = require('./suppliers.routes');
const purchasePlanRoutes = require('./purchasePlan.routes');
const purchaseOrderRoutes = require('./purchaseOrder.routes');
const timeLogsRoutes = require('./timeLogs.routes');
const payrollRoutes = require('./payroll.routes');
const trainingSessionsRoutes = require('./trainingSessions.routes');
const supplyChainPlanRoutes = require('./supplyChainPlan.routes');
const machinesRoutes = require('./machines.routes'); // thêm cho máy móc
const productsRoutes = require('./products.routes'); // thêm cho sản phẩm

// Định nghĩa các route với tiền tố '/api'
router.use('/sales-orders', salesOrderRoute); // Route cho sales orders
router.use('/inventory', inventoryRoutes); // Route cho inventory
router.use('/production-capacity', productionCapacityRoutes); // Route cho production capacity
router.use('/demand-forecast', demandForecastRoutes); // Route cho demand forecast
router.use('/production-plan', productionPlanRoutes); // Route cho production plan
router.use('/resource-allocation', resourceAllocationRoutes); // Route cho resource allocation
router.use('/workers', workersRoutes); // Route cho workers
router.use('/suppliers', suppliersRoutes); // Route cho suppliers
router.use('/purchase-plan', purchasePlanRoutes); // Route cho purchase plan
router.use('/purchase-orders', purchaseOrderRoutes); // Route cho purchase orders
router.use('/time-logs', timeLogsRoutes); // Route cho time logs
router.use('/payroll', payrollRoutes); // Route cho payroll
router.use('/training-sessions', trainingSessionsRoutes); // Route cho training sessions
router.use('/supply-chain-plan', supplyChainPlanRoutes); // Route cho supply chain plan
router.use('/machines', machinesRoutes); // Route cho máy móc
router.use('/products', productsRoutes); // Route cho sản phẩm

module.exports = router;
