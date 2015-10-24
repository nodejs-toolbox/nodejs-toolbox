/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http  = require('http');
var url   = require('url');
var query = require('querystring');


var port = 8080;

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page === '/') {
        res.write('You\'re at the reception desk. How can I help you?');
    } else if (page === '/basement') {
        res.write('You\'re in the wine cellar. These bottles are mine!');
    } else if (page === '/floor/1/bedroom') {
        res.write('Hey, this is a private area!');
    }
    res.end('<p>Hello Word from <strong>node.js</strong> web server!</p>');
});

console.log("running server on port " + port);
server.listen(port);
