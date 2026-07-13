const db = require('../db');
async function getAuthorbyId(req,res){
    const authorId = req.params.authorId;
    const author = await db.getAuthorbyId(authorId);
    console.log('Author:', author);
    console.log('AuthorId:', authorId);
    res.send(author);

}
module.exports = { getAuthorbyId };