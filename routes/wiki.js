const express = require('express');
const router = express.Router();
const main = require("../views/main");
const models = require('../models');
//const addPost = require("../views/addPost.js")
const addPage = require("../views/addPage");

router.get("/", async (req, res, next) => {
  try {
    res.send(main(models.Page));
    // const data = await client.query(baseQuery);
    // res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

router.get("/:page", (req, res) => {
  res.redirect("/wiki");
}); 



router.post("/", (req, res) => {
    res.send("post");
  });
  



module.exports = router;