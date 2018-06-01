var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
// static files
app.use(express.static('server/public'));

app.listen(port, function () {
    console.log('Listening on port:', port);
});