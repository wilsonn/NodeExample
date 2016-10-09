var http = require("http");

var manejador = function(solicitud, respuesta){
	console.log("Recibo peticion");
	respuesta.end("hola mundo con node.js");
};

var servidor = http.createServer(manejador);

servidor.listen("8090");