//Hello world using ESM
//example from vscode.com
var msg = "hello world";
console.log(msg);

//example from nodejs.org
import http from 'node:http';
//To load ES module, set "type": "module" in the package.json
//package.json stores project metadata

const hostname = '127.0.0.1'
const port = 3000;

//request and response, statusCode 200 indicates successful response
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'plain text'});
    res.end('Hello World!');
    //respond with "Hello world"
});

//server listens at specified port and host name
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});
//To run, run node app.js in the terminal
