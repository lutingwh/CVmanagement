var viewConfig = require('./config/view');
var errorConfig = require('./config/error');
var utilitiesConfig = require('./config/utilities');
var routesConfig = require('./config/routes');
var Sequelize = require('sequelize');

var express = require('express');

var app = express();

viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);
app.set('views','./views');
var ejs = require('ejs');
//app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.get('/', function (req, res, next) {     
    res.render('index');
});

app.listen(8100,function(){
    console.log("Server Start!");
});
module.exports = app;
