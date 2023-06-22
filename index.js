const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors');



app.use(cors());
app.get("/", (req, res) => {
    res.send({ messes: "hello server is run" })
})

const chef = require('./chef.json');
app.get("/chef", (req, res) => {
    res.send(chef)
})

const Recipes  = require('./Recipes.json');
app.get("/Recipes", (req, res) => {
    res.send(Recipes)
})
app.get("/chef/:id", (req, res) => {
    const id = req.params.id;
    const items = Recipes.filter(pd => pd.id == id)
    res.send(items)
})


// npm i cors



app.listen(port, () => {
    console.log("hello this server is runing 5000");
})