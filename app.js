const express = require("express");
const morgan = require("morgan");
const main = require("./views/main");
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

// const { db } = require('./models')

const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));


// app.get("/", (req, res) => {
//     res.send(main());
//   });

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const PORT = 3000;
const init = async () =>{

  await models.User.sync();
  await models.Page.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();


