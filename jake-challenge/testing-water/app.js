//Hello world
//example from vscode.com
var msg = "hello world";
console.log(msg);

//example from nodejs.org
import http from 'node:http';

const hostname = '127.0.0.1'
const port = 3000;

//request and response, statusCode 200 indicates successful response
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify({
        data:'Hellow World!',
    }));
    //respond with "Hello world"
});

//server listens at specified port and host name
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
//To run, run node app.js in the terminal
