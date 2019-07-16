var express = require('express');
var path = require('path');

var app = express();
var server = app.listen(80, () => {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server loaded on Host: ' + host + ' Port: ' + port);
});

app.get('/', (req, res) => {
	res.sendFile('public/index.html', { root: path.join(__dirname, './') });
});

app.use(express.static('./public'));

app.get('/angles', (req, res) => {
	var fromPython = [1,2,3,4,1,5,2,32,1]
	if (req.query.experimentid == 1) {
		// gets a result array back
		res.json({
			theta: fromPython
		});
	} else if (req.query.experimentid == 2) {
		res.json({
			theta: [2, 2, 2, 2, 2]
		});
	} else if (req.query.experimentid == 22) {
		res.json({
			name: "lafe"
		});
	}
});