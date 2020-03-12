const express = require("express");
const morgan = require("morgan");
const main = require("./views/main.js");


const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.redirect('./views/main');
  })


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});