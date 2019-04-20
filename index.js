//declaration of constansta and all libraty using in project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
 
// parse application/json
app.use(bodyParser.json());
 
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datacenter'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//insert data param string
app.post('/api/message/:string',(req, res) => {
  let data = {message: req.params.string};
  let sql = "INSERT INTO production SET ?"; 
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err; // detect if error case
    res.send(JSON.stringify({"status": "success","insert_data": req.params.string , "response": results})); //response
  });
});

  //select all data production
app.get('/api/production',(req, res) => {
  let sql = "SELECT * FROM production";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": "success", "response": results}));
  });
});

//select data production by id
app.get('/api/production/:id',(req, res) => {
  let sql = "SELECT * FROM production WHERE id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": "success", "response": results}));
  });
});

app.listen(3838,() =>{ // running server using port 3838
    console.log('Server started on port 3838...');
  });