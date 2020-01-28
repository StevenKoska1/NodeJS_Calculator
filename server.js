const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    console.log('Hello there');
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
    
    //res.sendFile();
});

app.post('/', function(req, res){
    console.log('data sent');
    let num1 = Number(req.body.number1);
    let num2 = Number(req.body.number2);

    let result = num1+num2;
    res.send('Your result is '+ result);
});

app.listen(3000, function(){
    console.log("Server started on 3000");
    
    
});