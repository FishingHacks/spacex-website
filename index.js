const { response } = require("express");
const express = require("express");

const app = express();

app.use(express.static("./public"))

app.get("/rocket/:id", (req, res) => {
    res.sendFile(process.cwd() + "/views/rocket.html");
});

app.get("/crew/:id", (req, res) => {
    res.sendFile(process.cwd() + "/views/crew.html");
});

app.listen(80);