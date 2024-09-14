// src/configs/db.config.js
require('dotenv').config();

module.exports = {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'sa',
  PASSWORD: process.env.DB_PASSWORD || '12345',
  DB: process.env.DB_NAME || 'ProductionPlanning',
  dialect: 'mssql',  // Sử dụng SQL Server
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    options: {
      encrypt: false, 
      trustServerCertificate: true  
    }
  }
};
