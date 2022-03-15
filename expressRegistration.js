const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/form', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'registration.html');
  res.sendFile(completePath);
});
app.post('/register', function (req, res) {
  console.log(req.body);
  res.send(
    `<style>
    div{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column
    }
    table{
      font-family: Arial, Helvetica, sans-serif;
       border-collapse: collapse; width:50%;
    } 
    #user td, #user th {
      border: 1px solid #ddd;
      padding: 8px;
    }
    #user tr:hover {
      background-color: #ddd;
    }
    #user th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: rgb(104, 131, 250);
      color: white;
    }
    h1{
      color:rgb(0, 0, 95);
      font-weight: 600;
    }
    </style>
    <div>
    <h1>User Details</h1>
    <table id="user">
    <tr>
    <th>Username</th>
    <th>Email</th>
    <th>Password</th>
    <th>DOB</th>
    <th>City</th>
    <th>Country</th>
    </tr>
    <tr>
    <td>${req.body.username}</td>
    <td>${req.body.email}</td>
    <td>${req.body.password}</td>
    <td>${req.body.date}</td>
    <td>${req.body.city}</td>
    <td>${req.body.country}</td>
    </tr>
    <table>
    <div>`
  );
});
app.listen(3001);
console.log('Program Started.Listening to port 3001');
