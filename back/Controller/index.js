var express = require('express');  
var bodyParser = require("body-parser");  
var app = express();  
const cors = require("cors");
app.use(function (req, res, next) {  
res.header("Access-Control-Allow-Origin", "*");  
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
next();  
});  

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 
const Data = require('../Controller/Person')  
app.use('/',Data)  
app.listen(5000, function () {  
console.log('Server is running..');  
}); 
