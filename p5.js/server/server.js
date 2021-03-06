
var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Running...");

var socket = require('socket.io');
var io = socket(server);


io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('New Connection From ' + socket.id);

	socket.on('mouse',mouseMsg);

	function mouseMsg(data) {
		socket.broadcast.emit('mouse',data); //This sends data to all the other clients
		//io.socket.emit('mouse',data);   //This line sends data to all the clients including itself
		console.log(data);
	}




}