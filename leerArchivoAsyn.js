var http = require("http"),
	fs = require("fs");


http.createServer(function(rep,res){
	fs.readFile("./index_1.html", function(err, html){
		res.write(html);
		res.end();	
	});
}).listen("8090");