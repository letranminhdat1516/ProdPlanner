const Sequelize = require('sequelize');
const initModels = require('./init-models'); 
require('dotenv').config(); 

// Tạo kết nối tới cơ sở dữ liệu
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mssql', 
  logging: false, 
});

// Khởi tạo các models từ initModels
const models = initModels(sequelize);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = {
  ...models, 
  sequelize, 
};
