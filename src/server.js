const app = require('./app'); // Import app đã cấu hình từ app.js
const dbConfig = require('./configs/db.config'); // Cấu hình kết nối cơ sở dữ liệu
const Sequelize = require('sequelize');

// Thiết lập kết nối tới cơ sở dữ liệu với Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

// Xác thực kết nối tới cơ sở dữ liệu
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Khởi động server và sử dụng cổng đã định nghĩa
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
