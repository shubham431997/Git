import React, { useState } from 'react'
import img1 from './images/breadcumb3.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    fontSize: '16px',
    border: '1px solid white',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: 'white'
  };

function CreateRecipes() {
    const [name , setName]=useState("");
    const [ingredients , setIngredients]=useState("");
    const [instructions , setInstructions]=useState("");
    const [image , setImage]=useState(null);
    const navigate= useNavigate();
  
    function Submit (){
        if( !(name ==""  & ingredients == "" & instructions== "")){
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('ingredients', ingredients);
            formData.append('instructions', instructions);
            formData.append('image', image);
      
             axios.post('http://localhost:4000/recipe/recipes', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
      
            toast.success("New Recipe Created")
            navigate('/home1');
          } catch (error) {
            console.error(error);
          }
        }
        else{
            console.log("write Something")
        }
        };
  return (
    <>
    <div style={{
        backgroundImage: `url(${img1})`,
        backgroundPosition: 'center',
        width: '95%',
        marginLeft:'50px',
        height: '200px',
        marginTop:'40px',
        backgroundRepeat:'no-repeat',
        justifyContent:'center',
        display:'flex',
        alignItems:'center'
      }}>
        <h1 style={{color:'black'}}>Create Recipes</h1>
    </div>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      textAlign:'center',
      margin:'50px',
     
    }}>
     <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.9)',
          opacity:'0.9',
          width:'1000px'
        }}>
        <div style={{marginBottom:'30px'}}>
            <h2 style={{color:'yellow'}}>Add Recipe to the Recipes List</h2>
        </div>
          <form  encType="multipart/form-data">
            <input
              type="text"
              placeholder="Enter Recipe Title"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="text"
              id="ingredients"
              placeholder="Enter Recipe Ingradients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
              style={inputStyle}
            />      
            <input
              type="text"
              id="instructions"
              placeholder="Enter Instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              required
              style={inputStyle}
            />
            <label htmlFor="image">Choose an image:</label>
            <input
              type="file"
              id="image"
              name='image'
            //  value={image}
              onChange={(e) => setImage(e.target.files[0])}
              required
              style={inputStyle}
            />
            <button type="submit" onClick={Submit} style={{
              width: '100%',
              padding: '15px',
              fontSize: '18px',
              backgroundColor: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}>
              Create Recipe
            </button>
            </form>
        </div>
        <ToastContainer></ToastContainer>
    </div>
    </>
  )
}

export default CreateRecipes