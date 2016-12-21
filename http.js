var http=require('http');
http.createServer(function(req,res) {
	// body...
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('Hellow Nodejs');
	res.end();
}).listen(2015);