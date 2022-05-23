const PORT = 8000
const express = require('express');
const ejs = require('ejs')
const axios = require("axios").default;
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser') 
const functions = require("./functions/functions")

const convertToRoman = functions.convertToRoman;

let app = express()

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

let value = "";

app.get('/', (req, res) => {
  res.render('home', {value: value})
})

app.post("/", (req, res) => {
  let num = req.body.value

  value = convertToRoman(num)
  
  res.redirect("/")
})

app.get("/api/:number", (req, res) => {
  let num = parseInt(req.params.number)

  if(num >= 0 && num <= 1000) {
    
  value = convertToRoman(num)

  const apiData = {
    number: num,
    numeral: value
  }

  console.log(apiData)

  res.json(apiData)
} else {
  throw new Error("[[ Please input a number between 1 and 1000 ]]")
}
})



app.listen(PORT, () => {
  console.log("App running on Port", PORT )
} )