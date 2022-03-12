//引入模块
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const template = require('art-template');
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'123456',
  database:'bingyandb',
})//链接数据库

//
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'web', 'static' )));//将static开放出去，web没有开放

app.engine('html', require('express-art-template'));
// 模板后缀为art时，用art-template

app.set('views', path.join(__dirname, 'web'));
// 设置模板存放路径文件夹，第二个参数是文件夹就好(views)

app.set('view engine', 'html');
// 设置模板默认后缀

//



// app.get('/', (req, res) => {
//   db.query('select * from table1', (err, results) => {
//     if (err) return console.log('err' + err.message);
//     // console.log('succeed ' + results);
//     res.render('index', {
//       table1:results
//     });

//   })
// })

app.get('/', (req, res) => {
  db.query('select * from table1', (err, results) => {
    if (err) return console.log('err' + err.message);
    // console.log('succeed ' + results);
    app.locals.table1 = results;
  })

  db.query('select * from table2', (err, results) => {
    if (err) return console.log('err' + err.message);
    // console.log('succeed ' + results);
    app.locals.table2 = results;
  })

  res.render('index');//这样可以渲染两个

})


app.listen(80, () => {
  console.log('服务器已经启动 http://127.0.0.1');
})