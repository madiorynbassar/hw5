var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('Views', path.join(__dirname, 'Views'));

app.get('/srudent', function(req, res) {
    res.render('student');
});

app.post('/student', urlencodedParser, function(req, res) {
    res.render('student-success', { data: req.body });
});

app.listen(3000);