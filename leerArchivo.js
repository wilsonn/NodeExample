var http = require("http"),
	fs = require("fs");

var html = fs.readFileSync("./index.html");

http.createServer(function(rep,res){
	res.write(html);
	res.end();	
}).listen("8090");