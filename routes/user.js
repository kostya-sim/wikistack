const express = require('express');
const router = express.Router();
//const addPost = require("../views/addPost.js")


router.get("/", async (req, res, next) => {
  try {
    
    
    // const data = await client.query(baseQuery);
    // res.send(postList(data.rows));
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(/*addPage*/);
});



router.get("/:id", async (req, res) => {
  try {
    const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) { next(error) }
});





router.post("/", async (req, res) => {
  const name = req.body.name;
  const title =  req.body.title;
  const content = req.body.content;

  // Insert the post in the database

  const existingUsers = await client.query(`SELECT name FROM users`);
  const existingUsers2 = [...existingUsers.rows];
  console.log(existingUsers2)
  console.log(existingUsers2.map(elem => elem.replace('anonymous', '')))

  //const mapper = existingUsers.map(elem => elem + 'test');
  // console.log(existingUsers.rows.replace('anonymous', ''));
  const data = await client.query(`INSERT INTO posts (title, content) VALUES (${title} ${content})`);
  await client.query(`INSERT INTO users (name) VALUES (${name})`);


  res.redirect(`/posts/${postId}`); // Redirect to the post details page


})

module.exports = router;