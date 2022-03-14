var express = require('express');

const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'123456',
  database:'bingyandb',
})

// 创建路由对象
var loginRouter = express.Router();

var userNameInfo=null;

loginRouter.post('/login', (req, res) => {
  //req.query.username和req.query.password
  let sql = "select * from users where username=?";
  // console.log("req.query.password:" + req.query.password);
  
  db.query(sql, [req.query.username], (err, results) => {
    if (err) {
      res.send('登陆失败');
      return console.log('err:' + err.message);
    }

    // console.log("results.password:" + results[0].password);
    // let result = JSON.stringify(results);
    // console.log('succeed ' + result);

    if (results.length < 1) {
      return res.send('找不到该用户名');
    }
    else if (results[0].password != req.query.password) {
      return res.send('密码输入错误');
    }
    else if (results) {
      userNameInfo = results;      
    }
 
    res.send('登录成功');
  })

})


loginRouter.get('/userinfo', (req, res) => {
  console.log(userNameInfo[0].username);
  res.send(userNameInfo[0].username);

})



// 向外导出
module.exports = loginRouter;