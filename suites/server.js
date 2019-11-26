var express = require('express');
var app = express();

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/fonts', express.static(__dirname + '/fonts'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scss', express.static(__dirname + '/scss'));

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

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});


