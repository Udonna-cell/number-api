"use strict";

const express = require("express");
const dotenv = require("dotenv");





var mysql = require('mysql');

var con = mysql.createConnection({
  MYSQL_URL: "mysql://root:b96RjdxJC8Wi9aopnwhw@containers-us-west-51.railway.app:7134/railway",
MYSQLDATABASE: "railway",
MYSQLHOST: "containers-us-west-51.railway.app",
MYSQLPASSWORD: "b96RjdxJC8Wi9aopnwhw",
MYSQLPORT: 7134,
MYSQLUSER: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});





dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.get('/',(req, res)=>{
  res.json({message: "welcome"})
})










app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));