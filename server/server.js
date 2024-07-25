const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RecipesRoute = require('./routes/Recipes');
const UserRoute = require('./routes/Users');

const app=express();
app.use(cors());


app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

//65c101f82c28f677d5cf3d01


let uri =
'mongodb+srv://shubhammahajan882:65c101f82c28f677d5cf3d01@cluster0.mpoxzza.mongodb.net/';
  mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
  })
.then(()=> console.log("MongoDB Database connected"))
.catch(err => console.log(err))


app.use('/recipe', RecipesRoute);
app.use('/auth', UserRoute);
app.use(express.static('uploads'))

app.listen(4000,()=>console.log("server running on 4000"));