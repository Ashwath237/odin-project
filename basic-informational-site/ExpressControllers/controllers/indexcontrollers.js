const db = require('../db');
async function getIndex(req,res){
    console.log('getIndex called');
    res.send({
        message:"Welcome to library of books",
        authors : db.getAuthors(),
        books : db.getBooks(),
        endpoints:{
            authors: "/authors/:id",
            books: "/books/:id",
        }
    });
}

module.exports = { getIndex };