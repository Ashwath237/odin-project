const http = require("http");
const fs = require('fs');
require('dotenv').config();

const server = http.createServer((req,res) =>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url ==="/hello"){
        const helloHtml = fs.readFileSync('./hello.html', 'utf-8');
        res.end(helloHtml);
    }
    else if (req.url === "/hey") {
        const heyHtml = fs.readFileSync('./hey.html', 'utf-8');
        res.end(heyHtml);
    }

    else if (req.url ==="/hi"){
        const hiHtml = fs.readFileSync('./hi.html', 'utf-8');
        res.end(hiHtml);
    }

    else{
        res.end("Error: 404 Not Found")
    }


});
console.log(process.env.API_KEY);
server.listen(3000);
console.log('Server running on http://localhost:3000');