var app = require("express")();
var http = require("http").Server(app);
// var io = require("socket.io")(http);
var fs = require("fs");

// io.on("connection", function(socket) {
// 	socket.on("disconnect", function() {
// 		console.log("user disconnect");
// 	});
// 	socket.on("draw", function(data) {
// 		console.log(data);
// 		socket.broadcast.emit("draw", data);
// 	});
// });
app.get("/users", function(req, res) {
	res.sendFile(__dirname + "/static/users.json");
})
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.get("/log", function(req, res) {
	res.sendFile(__dirname + "/log.html");
});
app.get("/styles/*", function(req, res) {
	res.sendFile(__dirname + "/styles/style.css");
});
app.get("/dist/*", function(req, res) {
	res.sendFile(__dirname + "/dist/bundle.js");
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
	res.sendFile(__dirname + "/static/ng-book.pdf");
});
http.listen(8080, function() {
	console.log("listening on *:3000");
});