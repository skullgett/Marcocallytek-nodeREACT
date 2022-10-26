const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express ();
const mysql = require('mysql');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'phone',
});

app.get('/api/get',(req,res)=> {
    db.query("SELECT * FROM customers",
    //[Name, Lastname, Phone], 
    (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
  });

app.post('/api/insert', (req,res) => { 
  
    const Name = req.body.Name
    const Lastname = req.body.Lastname
    const Email = req.body.Email
    const Phone = req.body.Phone

    db.query("INSERT INTO customers (Name, Lastname, Email, Phone) VALUES (?,?,?,?)",
    //select current_timestamp();
    [Name, Lastname, Email, Phone], 
    (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Pronto nos comunicaremos contigo");
        }
      });
  });

app.listen(3001, ()=>{
    console.log('Server on port 3001');
});

