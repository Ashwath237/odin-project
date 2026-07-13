        const bookAuthors=[
            {id : 1 , name : "Alex"},
            {id : 2 , name : "Hope"},
            {id : 3 , name : "Goat"},
    ];

        async function getAuthorbyId(authorId){
            return bookAuthors.find(author => author.id === Number(authorId)); 
        }

        module.exports = { getAuthorbyId };
        