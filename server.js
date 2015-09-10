var http = require('http');
var Router = require('./lib/router'); 
var fs = require('fs');
var router = Router();

var server = http.createServer(function(req, res) {
	var counter = 0;
	if(req.url === '/notes' && req.method === "POST") {
		req.on('data', function(data){
			counter += 1;
			var parsed = JSON.parse(data.toString());
			var fileName = __dirname + '/../notes' + counter + '.json';
			fs.writeFileSync(fileName, parsed);
			res.end();
		});
	});
	
	if(req.method === 'GET'){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('how may I assist you?');
		res.end();
	}
});

server.listen(3000, function(){
	console.log('server running at port 3000');
});
