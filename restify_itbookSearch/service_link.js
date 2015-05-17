var request = require("request");

var searchEndPoint = "http://it-ebooks-api.info/v1/search/";

var bookIDEndpoint = "http://it-ebooks-api.info/v1/book/";

//search book by query string
exports.getBooksByquery = function(req,res,next){
	var queryString = req.params.query;
	
	request(searchEndPoint+queryString, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
			  res.contentType = 'json';
			  res.send(JSON.parse(body));
			  //res.send(JSON.parse(body)); //show the result in browser. 
		  }
		});
		
	return next();
};

//search books by id
exports.getBooksByID = function(req,res,next){
	var bookID = req.params.id;
	request(bookIDEndpoint+bookID, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
			  res.contentType = 'json';
			  res.send(JSON.parse(body));
		  }
		});
		
	return next();
};	