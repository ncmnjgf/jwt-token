require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const posts = [
  { username: "Dadaso", title: "Post 1" },
  { username: "Kyle", title: "Post 2" }
];

// login route
app.post('/login', (req, res) => {
  // Authenticate user (for demo: no password check)
  const username = req.body.username;
  console.log("Login username:", username); // <--- check this
  const user = { name: username };

  // generate access token
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

app.get('/posts',AuthenticateToken , (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name));
});
function AuthenticateToken (req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // get token after "Bearer"

  if (token == null) return res.sendStatus(401); // no token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // invalid token
       console.log("Decoded JWT user:", user);
    req.user = user; // attach user payload
    next();
  });
}

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
