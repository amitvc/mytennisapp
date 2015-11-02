// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
var port = process.env.PORT || 9000; // set our port

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. 
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users


/**
 * This is where you configure the routes. routes which have pattern http://appname/profileService will be serviced by profileRoutes
 * and routes which have pattern http://appname/promotionService will be serviced by the promotionRoutes.
 */
app.use("/profileService", require("./routes/profileRoutes"));
app.use("/promotionService", require("./routes/promotionRoutes"))


// start app ===============================================
app.listen(port);	
console.log('Application listening on ' + port); 			
exports = module.exports = app;