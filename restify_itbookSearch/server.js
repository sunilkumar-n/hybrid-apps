var restify = require("restify");

var configTools = require("./config.js");

var service_link = require("./service_link");

var server = restify.createServer(); // REST Server
var config = configTools.loadConfiguration();

// Configure the server to parse the request body into req.body
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restify.acceptParser(server.acceptable));


server.get("/queryBook/:query",service_link.getBooksByquery);

server.get("/bookByID/:id",service_link.getBooksByID);

//default spa page 
server.get(/\/public\/?.*/, restify.serveStatic({
	  directory: './docs',
	  default: 'index.html'
	}));


//Start Server
server.listen(process.env.PORT || config.server.port, function() {
    console.log('Kinvey Service Link Started: %s listening at %s',
                server.name,
                config.server.address);
});

