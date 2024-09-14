const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Import các route chính

// Khởi tạo ứng dụng Express
const app = express();

// Thiết lập middleware cho CORS và Body Parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// Xuất module app để sử dụng trong các file khác
module.exports = app;
