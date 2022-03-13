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
var registerRouter = express.Router();

registerRouter.post('/register', (req, res) => {
  //req.query.username和req.query.password
  let sql = "insert into users (username , password ) values (?,?)";
  console.log(req.query.username);
  db.query(sql,[req.query.username , req.query.password], (err, results) => {
    if (err) {
      res.send('该用户名已被占用');
      return console.log('err:' + err.message); 
    }  
    console.log('succeed ' + results);
    res.send('已注册成功，请登录');
  })

})


// 向外导出
module.exports = registerRouter;