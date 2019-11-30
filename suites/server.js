var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scss', express.static(__dirname + '/scss'));
app.use('/hotelfiles', express.static(__dirname + '/hotelfiles'));
app.use('/Hotel-Hotel WordPress Theme_files', express.static(__dirname + '/Hotel-Hotel WordPress Theme_files'));
app.use('/node-modules', express.static(__dirname + '/node-modules'));

app.get('/', function (req, res) {
   res.sendFile("index.html", { root : __dirname});
})
app.get('/import', function (req, res) {
   res.sendFile("import.html", { root : __dirname});
})
app.get('/about', function (req, res) {
   res.sendFile("about.html", { root : __dirname});
})
app.get('/book', function (req, res) {
   res.sendFile("book.html", { root : __dirname});
})
app.get('/contact', function (req, res) {
   res.sendFile("contact.html", { root : __dirname});
})
app.get('/events', function (req, res) {
   res.sendFile("events.html", { root : __dirname});
})
app.get('/rooms', function (req, res) {
   res.sendFile("rooms.html", { root : __dirname});
})
app.get('/room-informations', function (req, res) {
   res.sendFile("room-informations.html", { root : __dirname});
})
app.get('/rooms2', function (req, res) {
   res.sendFile("rooms2.html", { root : __dirname});
})
app.get('/rooms3', function (req, res) {
   res.sendFile("rooms3.html", { root : __dirname});
})
app.get('/rooms4', function (req, res) {
   res.sendFile("rooms4.html", { root : __dirname});
})
app.get('/rooms5', function (req, res) {
   res.sendFile("rooms5.html", { root : __dirname});
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});


