const express = require('express');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const jsonwebtoken = require('jsonwebtoken');
const { append } = require('express/lib/response');

const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'123456',
  database:'bingyandb',
})

// 创建路由对象
var loginRouter = express.Router();

var userNameInfo = null;
const secretKey = 'Raxskle';

loginRouter.post('/login', (req, res) => {
  //req.query.username和req.query.password
  let sql = "select * from users where username=?";
  // console.log("req.query.password:" + req.query.password);
  
  db.query(sql, [req.query.username], (err, results) => {
    if (err) {
      res.send({
        message: "登录失败"
      });
      return console.log('err:' + err.message);
    }

    // console.log("results.password:" + results[0].password);
    // let result = JSON.stringify(results);
    // console.log('succeed ' + result);

    if (results.length < 1) {
      return res.send({
        message:"找不到该用户名"
      });
    }
    else if (results[0].password != req.query.password) {
      return res.send({
        message:"密码输入错误"
      });
    }
    else if (results) {
      userNameInfo = results;    
      
    }
    
    const tokenstr = jwt.sign({username: req.query.username}, secretKey, {expiresIn:"3h"})
 
    res.send({
      message: "登录成功",
      token: tokenstr
    });
  })

})

loginRouter.get('/userinfo', (req, res) => {
  // console.log(userNameInfo[0].username);
  res.send(userNameInfo[0].username);
  // res.send(req.user.data);//配置的experssJWT自动生成的user对象

})


loginRouter.use(expressJWT({
  secret: secretKey,
  algorithms:['HS256']
}))


loginRouter.get('/loginjump', (req, res) => {

  res.send("/userpage.html");

})



// 向外导出
module.exports = loginRouter;