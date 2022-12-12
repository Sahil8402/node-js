//The hhtp.createServer() method includes request 
//and response parameters which is supplied by Node.js

//The request object can be used to get information
//about the current http request.
//e.g. url,request,header and data.



const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url); //It is use for showing different page
    if (req.url == "/") {
        res.end("Hello from the  home");
    } else if (req.url == "/about") { //This is called routing .
        res.end("Hello from About us page");
    } else if (req.url == "/contact") { //This is called routing .
        res.end("Hello from contact us page");
    } else {
        res.writeHead(404, { "Contact-type": "text/html" }); // It will change content type.
        res.end("<p>404 error page:</p>"); // for error 404 for showing error or not
    }
    // res.end("Hello Guys!ALoopuri kha lo"); //it means if we request something then response is given
});
server.listen(8000, "127.0.0.1", () => {
    console.log('Listening to the  port number');
});