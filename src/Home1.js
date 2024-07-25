import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import background from './food.jpg'

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    display();
  }, []);

  function display() {
    axios.get('http://localhost:4000/recipe/recipes')
         .then((response) => {
          setRecipes(response.data);
         })
  }

  return (
    <>
    <div style={{
      backgroundImage: `url(${background})`,
      width: '95%',
      height: '230px',
      margin: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      opacity:'0.9'
    }}>
      <h3 style={{
        textAlign: 'center',
        color: 'white', 
        fontSize:'40px'
      }}>
        Recipes
      </h3>
      </div>
    <div>
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'white'
  }}>
  {
    recipes.map((recipe) => (
      <div key={recipe._id} style={{
        maxWidth: '75%',
        maxHeight: '900px',
        backgroundColor: 'white',
        borderRadius: '30px',
        opacity: '0.9',
        justifyContent:'center',
        margin:'30px'
      }}>
        <div style={{}}>
          <img src={require(`../server/uploads/${recipe.image}`)} height={500} width={1400} borderRadius={20} alt={recipe.name} />
        </div>
        <div style={{marginLeft:'1200px',marginTop:'30px'}}>
          <button className='btn btn-success' style={{ width: "150px",height:'60px',fontSize:'20px',backgroundColor:"green" }}>Save</button>
        </div>
        <h2 style={{ color: 'purple', marginTop: '20px',marginLeft:'20px'}}>{recipe.name}</h2>
        <p style={{ fontSize: '25px' ,marginLeft:'20px'}}>{recipe.ingredients}</p>
        <p style={{ fontSize: '20px', color: 'grey',marginLeft:'20px' }}>{recipe.instructions}</p>
        
      </div>
    ))
  }
</div>

    </div>
    </>
  );
}

export default Home;




