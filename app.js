const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
//Init App
const app = express();

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//Set Public Folder (Store pic, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

//Start Server
app.listen(PORT, function () {
    console.log('Server started on heroku or port 3000..');
})