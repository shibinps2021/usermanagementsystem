var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var controller=require('../controller/controller');

var connection  = mysql.createConnection({
     host     : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password :  process.env.DB_PASS,
    database :  process.env.DB_NAME
});
module.exports={
    read:(err,data)=>{
        connection.query("SELECT * FROM user",(err,rows)=>{
        
        if(err)throw err;
        console.log(rows);
    })}
    
}

module.exports=router;
