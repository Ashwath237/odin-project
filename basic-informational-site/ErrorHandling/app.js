const express = require("express");
const app = express();
const errorHandler = require('./errorhandling');


app.get("/", (req, res) => {
    throw new Error("Test error");
});

app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));


