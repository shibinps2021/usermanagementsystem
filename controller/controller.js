
    
   
    var mysql = require('mysql');

    var connection  = mysql.createPool({
        host     : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password :  process.env.DB_PASS,
    database :  process.env.DB_NAME
    });
    

exports.view=(req,res)=>{
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       
        connection.query("SELECT * FROM user WHERE status='active'",(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.render('home',{rows})
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });

    
}


exports.find=(req,res)=>{

    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       let searchterm=req.body.search
        connection.query("SELECT * FROM user WHERE firstname LIKE? OR lastname LIKE?",["%"+ searchterm + "%","%"+ searchterm + "%"],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.render('home',{rows})
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });


}

exports.form=(req,res)=>{
    res.render('adduser')
}

exports.create=(req,res)=>{
    const{firstname,lastname,email,phone,comments}=req.body
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       let searchterm=req.body.search
        connection.query('INSERT INTO user SET firstname=?,lastname=?,email=?,phone=?,comments=?',[firstname,lastname,email,phone,comments],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.render('adduser',{alert:'user added succesfully'})
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });


}

exports.edit=(req,res)=>{
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       
        connection.query("SELECT * FROM user WHERE Id=?",[req.params.id],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.render('edit',{rows})
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });
   
}

exports.update=(req,res)=>{
    const{firstname,lastname,email,phone,comments}=req.body
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       
        connection.query("UPDATE user SET firstname=?,lastname=?,email=?,phone=? WHERE Id=?",[firstname,lastname,email,phone,req.params.id],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.redirect('/')
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });
   
}


exports.delete=(req,res)=>{
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       
        connection.query("DELETE FROM user WHERE Id=?",[req.params.id],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.redirect('/')
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });
   
}

exports.viewall=(req,res)=>{
    connection.getConnection((err,connection) => {
        if(err) throw err;
        console.log('Connected to MySQL Server!');
       
        connection.query("SELECT * FROM user WHERE id=?",[req.params.id],(err,rows)=>{
    //    connection.release()
            if(!err)
            {
                res.render('viewall',{rows})
            }else{
                console.log(err);
            }
            console.log(rows);
        })
    });

    
}
