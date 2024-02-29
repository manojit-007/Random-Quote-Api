const express = require("express");
const app = express();
const data = require("./data.json")


const randomNumber = () => Math.floor(Math.random() * 100);


app.get("/", async(req, res) => {
    let number = randomNumber()
    return res.json(data[number])
});

app.listen(8080, () => {
    console.log("Server listening");
})