const express = require('express');
const app = express();
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');


app.use(express.static('public'));

var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('JSON Server is running on ' + port);

});
