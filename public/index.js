var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

io.on("connection", function(socket) {
	console.log("user connected");
	socket.on("chat message", function(msg) {
		io.emit("chat message", msg);
	});
	socket.on("disconnect", function() {
		console.log("user disconnect");
	});
	socket.on("draw", function(data) {
		console.log(data);
		socket.broadcast.emit("draw", data);
	});
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});
app.get("/qwe", function(req, res) {
	res.send("<p>qwe</p>")
});
app.get("/styles/*", function(req, res) {
	res.sendFile(__dirname + "/styles/style.css");
});
app.get("/dist/*", function(req, res) {
	res.sendFile(__dirname + "/dist/bundle.js");
});
http.listen(3000, function() {
	console.log("listening on *:3000");
});