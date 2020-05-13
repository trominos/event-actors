var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("{ [ { 'zip' : '19426' } , { 'zip' : '18110'    }  , {  'zip' : '18210' }  ]}");

});

var port = 80;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
