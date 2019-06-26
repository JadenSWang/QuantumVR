var express = require('express');
var path = require('path');

con.connect();

var app = express();
var server = app.listen(80, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server loaded on Host: ' + host + ' Port: ' + port);
});

app.get('/', (req, res) => {
	res.sendFile('index.html', { root: path.join(__dirname, './') });
});

app.use(express.static('./public'));