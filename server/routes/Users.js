const app = require('express').Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../model/user");

app.post("/register", async (req, res) => {
  const { name, username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    return res.status(400).json({ message: "Username already exists" });
  }

  else{
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ name,username, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User Registered Successfully" });
  }
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Username or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

module.exports = app;


 const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    jwt.verify(authHeader, "secret", (err) => {
      if (err) {
        return res.sendStatus(403);
      }
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports.verifyToken = verifyToken;