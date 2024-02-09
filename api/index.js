const express = require('express');
const app = express();
const mysql = require('mysql');
mysql.connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user: 'root',
    password: '',
    database: 'shop'
});

const db = mysql.connection;



// route를 직접 작성할 경우
app.get('/', function (req, res) {
  res.send('Hello World!')
});

// // route 설정을 분리할 경우
// // 물론 여럿 추가할 수 있음
// const users = require('./routes/users');
// app.use('/users', users);

// module.exports = {
//   path: '/api',
//   handler: app
// };