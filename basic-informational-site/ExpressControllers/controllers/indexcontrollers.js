const db = require('../db');
async function getIndex(req,res){
    console.log('getIndex called');
    res.render('index', { authors: db.getAuthors(), books: db.getBooks() });
}

module.exports = { getIndex };