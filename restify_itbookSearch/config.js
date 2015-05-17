var fs = require("fs");

var path = require("path");

var loadConfigFile = function(file){
	var conf;
	var config;
	
	if(file){
		conf = file;
	}else{
		conf = path.resolve(__dirname+"/config.json");
	}
	
	if(!fs.existsSync(conf)){
		return null;
	}
	
	config = JSON.parse(fs.readFileSync(conf));
	
	return config;
}

exports.loadConfiguration = loadConfigFile;
