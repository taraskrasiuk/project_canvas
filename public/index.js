var app = require("express")();
var http = require("http").Server(app);
var fs = require("fs");
var io = require("socket.io")(http);

io.on("connection", function(socket) {
	socket.on("connection", function() {
		console.log("User connect");
	});
	socket.on("disconnect", function() {
		console.log("user disconnect");
	});
	socket.on("draw", function(data) {
		console.log("DATA send" + data);
		socket.broadcast.emit("draw", data);
	});
});




app.get("/users", function(req, res) {
	res.sendFile(__dirname + "/static/users.json");
});
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.get("/log", function(req, res) {
	res.sendFile(__dirname + "/log.html");
});
app.get("/styles/*", function(req, res) {
	res.sendFile(__dirname + "/styles/" + req.params[0]);
});
app.get("/build/bundle.js", function(req, res) {
	res.sendFile(__dirname + "/build/bundle.js");
});
app.get("/build/0.bundle.js", function(req, res) {
	res.sendFile(__dirname + "/build/0.bundle.js");
});
app.get("/static/images/*", function(req, res) {
	res.sendFile(__dirname + "/static/images/" + req.params[0]);
});
app.get("/scripts/pdf.js", function(req,res) {
	res.sendFile(__dirname + "/scripts/pdf.js");
});
app.get("/scripts/pdf.worker.js", function(req, res) {
	res.sendFile(__dirname + "/scripts/pdf.worker.js");
});
app.get("/build/bundle.js", function(req, res) {
	res.sendFile(__dirname + "/build/bundle.js");
});
app.get("/ng-book.pdf", function(req, res) {
	console.log(req);
	res.sendFile(__dirname+ "/static/sample-file.pdf");
});
app.get("/static/*", function(req, res) {
	res.sendFile(__dirname+"/static/" + req.params[0]);
});
http.listen(3000, function() {
	console.log("listening on *:3000");
});