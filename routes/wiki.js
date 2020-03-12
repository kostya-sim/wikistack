const express = require('express');
const router = express.Router();
const main = require("../views/main");
const {Page, User} = require('../models');

//const addPost = require("../views/addPost.js")
const addPage = require("../views/addPage");



router.get("/", async (req, res, next) => {
  try {
    res.send(main(Page));
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





router.post("/", async (req, res, next) => {
    console.log(req.body);
    const page = new Page({
        title: req.body.title,
        content: req.body.title,
        slug: req.body.title,
        status: req.body.status
      });
      
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise.
      try {
        await page.save();
        console.log(page);
        res.redirect('/');
      } catch (error) { next(error) }
  });
  



module.exports = router;