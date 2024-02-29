const express = require("express");
const app = express();
const data = require("./data.json")

const port = `https://manojit-007.github.io/Random-Quote-Api/`

const randomNumber = () => Math.floor(Math.random() * 100);


app.get("/", async(req, res) => {
    let number = randomNumber()
    return res.json(data[number])
});

app.listen(port, () => {
    console.log("Server listening");
})