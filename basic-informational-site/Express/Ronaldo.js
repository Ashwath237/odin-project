const express = require("express");
const fs = require('fs');
const app = express();

app.get("/hello", (req, res) => {
    const helloHtml = fs.readFileSync('./hello.html', 'utf-8');
    res.end(helloHtml);
});

app.get("/hey", (req, res) => {
    const heyHtml = fs.readFileSync('./hey.html', 'utf-8');
    res.end(heyHtml);
});


app.get("/hi", (req, res) => {
    const hiHtml = fs.readFileSync('./hi.html', 'utf-8');
    res.end(hiHtml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
if (error) throw error;
console.log(`Server listening on port ${PORT}!`);
});
