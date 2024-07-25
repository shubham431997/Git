const mongoose = require('mongoose');


const RecipesItemSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },

  ingredients: 
    {
      type: String,
      required: true,
    },
  
  instructions: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

})

module.exports = mongoose.model('recipes',RecipesItemSchema );