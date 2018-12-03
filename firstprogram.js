var http = require('http');

// creating a server application which is based on a simple function
http.createServer(function (req, res) {
  // writeHead function is used to send header data to the client
    res.writeHead(200, {'Content-Type': 'text/html'});


    //We are then using the server.listen function to make our server application listen to client requests on port no 7000
    res.end('Hello World!');
}).listen(8089);

//$ node firstprogram.js
