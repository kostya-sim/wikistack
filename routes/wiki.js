const express = require('express');
const router = express.Router();
const main = require("../views/main");
const models = require('../models');
//const addPost = require("../views/addPost.js")


router.get("/", async (req, res, next) => {
  try {
    res.send(main(models.Page));
    // const data = await client.query(baseQuery);
    // res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send("adding");
});


router.post("/", (req, res) => {
    res.send("post");
  });
  



module.exports = router;