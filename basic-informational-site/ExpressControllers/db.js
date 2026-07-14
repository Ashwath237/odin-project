const books = [
    {id: 1 , title: "Open Hearts", authorName: "Alex" },
    {id : 2 , title: "So High", authorName: "Clara"},
    {id : 3 , title: "The Worker", authorName: "Bhavika"},
];

const authors = [
    {id : 1 , name : "Alex"},
    {id : 2 , name : "Hope"},
    {id : 3 , name : "Goat"},  
]

async function getAuthorbyId(authorId){
    return authors.find(author => author.id === Number(authorId));
}

async function getBookbyId(bookId){
    return books.find(book => book.id === Number(bookId));
}

function getAuthors(){
    return authors;
}

function getBooks(){
    return books;
}


module.exports = { getAuthorbyId , getBookbyId , getAuthors , getBooks};

