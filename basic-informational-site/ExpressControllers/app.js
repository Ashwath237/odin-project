const path = require('node:path'); 
const express = require('express');
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const { getAuthorbyId} = require('./controllers/authorcontrollers');
const {getBookbyId} = require('./controllers/bookcontrollers');
const { getIndex } = require('./controllers/indexcontrollers');

app.get('/', getIndex);
app.get('/authors/:authorId', getAuthorbyId);
app.get('/books/:bookID', getBookbyId);

app.listen(3000, () => console.log('Server running on port 3000'));