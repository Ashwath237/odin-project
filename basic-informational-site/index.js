const http = require("http");

const server = http.createServer((req,res) =>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url ==="/"){
        res.end("<h1>Index page</h1>");
    }
    else if (req.url === "/about") {
        res.end("<h1>About</h1>");
    }

    else if (req.url ==="/contact_me"){
        res.write("<h2>Name is Ash</h2>");
        res.write("<h3>Phone: 23423432</h3>");
        res.write("<h3>Lives in Atlanta</h3>");
        res.end();
    }

    else{
        res.end("Error: 404 Not Found")
    }


});

server.listen(3000);
console.log('Server running on http://localhost:3000');