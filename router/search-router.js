// 导入exprss
var express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'123456',
  database:'bingyandb',
})//连接数据库

// 创建路由对象
var searchRouter = express.Router();

searchRouter.get('/search', (req, res) => {
  const query = req.query;
  console.log(query.value);//query.value是要查的字符串

  let searchSql = "select * from search where text like "+"\'" +"%"+ query.value +"%"+"\'";
  // console.log(searchSql);
  db.query(searchSql, (err, results) => {
    if (err) return console.log('err:' + err.message);
    // console.log('succeed ' + results);
    // console.log(results.length);
    // let text = JSON.stringify(results);
    // console.log(text);    
    res.send(results);//是数组
  })

})

// 向外导出
module.exports = searchRouter;