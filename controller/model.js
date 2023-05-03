var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var controller=require('../controller/controller');

var connection  = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'usermanagement'
});
module.exports={
    read:(err,data)=>{
        connection.query("SELECT * FROM user",(err,rows)=>{
        
        if(err)throw err;
        console.log(rows);
    })}
    
}

module.exports=router;