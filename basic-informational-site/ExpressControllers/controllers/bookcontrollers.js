const db = require('../db');
async function getBookbyId(req,res){
    
    const bookID = req.params.bookID;
    const book = await db.getBookbyId(bookID);
    
    console.log('BookTitle:', book);
    console.log('BookId:', bookID);
    
    res.render('books',{book: book});

}
module.exports = { getBookbyId };