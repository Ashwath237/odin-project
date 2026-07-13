const express = require('express');
const app = express();
const { getAuthorbyId } = require('./controllers/authorcontrollers');

app.get('/authors/:authorId', getAuthorbyId);

app.listen(3000, () => console.log('Server running on port 3000'));

