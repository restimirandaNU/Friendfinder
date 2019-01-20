var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//create application & json parser
//var jsonParser = bodyParser.json();

//create app & urlencoded
//var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(bodyParser.urlencoded({ extended: true}));

//different tyoes of jsons
app.use(bodyParser.json({type: 'application/*+json'}))

//custome buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

//parse html body into string
app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
    console.log("App listening to PORT: " + PORT);
});