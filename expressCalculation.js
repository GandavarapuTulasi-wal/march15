const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  console.log(__dirname);
  const completePath = path.join(__dirname, 'calculation.html');
  res.sendFile(completePath);
});
app.post('/operation', function (req, res) {
  if (req.body.operation == 'add') {
    res.send(
      `<style>
    .card{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      color:brown;
      font-size:30px;
      font-weight:600;
    }
    h1{
      color:rgb(0, 0, 95);
      font-weight: 600;
      text-align:center;
    }
    span{
      border-color: #e4e7eb;
      padding:20px;
    }
    .box{
      display:flex;
    }
    </style>
    <h1>Calculation<h1>
    <div class="card">
    Addition of ${parseInt(req.body.firstno)} and ${parseInt(
        req.body.secondno
      )} is ${parseInt(req.body.firstno) + parseInt(req.body.secondno)}
    <div>`
    );
  } else if (req.body.operation == 'multiply') {
    res.send(
      `<style>
      .card{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:brown;
        font-size:30px;
        font-weight:600;
      }
      h1{
        color:rgb(0, 0, 95);
        font-weight: 600;
        text-align:center;
      }
      span{
        border-color: #e4e7eb;
        padding:20px;
      }
      .box{
        display:flex;
      }
      </style>
      <h1>Calculation<h1>
      <div class="card">
      Multipliction of ${parseInt(req.body.firstno)} and ${parseInt(
        req.body.secondno
      )} is ${parseInt(req.body.firstno) * parseInt(req.body.secondno)}
      <div>`
    );
  } else if (req.body.operation == 'divide') {
    res.send(
      `<style>
      .card{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:brown;
        font-size:30px;
        font-weight:600;
      }
      h1{
        color:rgb(0, 0, 95);
        font-weight: 600;
        text-align:center;
      }
      span{
        border-color: #e4e7eb;
        padding:20px;
      }
      .box{
        display:flex;
      }
      </style>
      <h1>Calculation<h1>
      <div class="card">
      Division of ${parseInt(req.body.firstno)} and ${parseInt(
        req.body.secondno
      )} is ${parseInt(req.body.firstno) / parseInt(req.body.secondno)}
      <div>`
    );
  } else if (req.body.operation == 'subtract') {
    res.send(
      `<style>
      .card{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        color:brown;
        font-size:30px;
        font-weight:600;
      }
      h1{
        color:rgb(0, 0, 95);
        font-weight: 600;
        text-align:center;
      }
      span{
        border-color: #e4e7eb;
        padding:20px;
      }
      .box{
        display:flex;
      }
      </style>
      <h1>Calculation<h1>
      <div class="card">
      Subtraction of ${parseInt(req.body.firstno)} and ${parseInt(
        req.body.secondno
      )} is ${parseInt(req.body.firstno) - parseInt(req.body.secondno)}
      <div>`
    );
  }
});
app.listen(3001);
console.log('Program Started.Listening to port 3001');
