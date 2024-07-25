import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css';
import background from './food.jpg'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/insta6.jpg'
import img4 from './images/insta7.jpg'
import img5 from './images/r1.jpg'
import img6 from './images/bg4.jpg'
import img7 from './images/breadcumb1.jpg'
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate =useNavigate();
  useEffect(() => {
  }, []);


  function handleNavigate (){
    navigate("/home");
  }
  return (
    <>
      <div style={{
        backgroundImage: `url(${img7})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        width: '1800px',
        height: '500px',
        marginTop:'40px',
        backgroundRepeat:'no-repeat',
      }}>
      </div>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <div style={{ display: 'inline-block', marginRight: '20px', position: 'relative' }}>
          <img src={img1} alt="Image 1" style={{ width: '700px', height: '300px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            <h1>Mocktail</h1>
            <p>lorem</p>
            <button className='btn btn-success' style={{ padding: '10px', width: '200px', height: '60px' }}>Read More</button>
          </div>
        </div>

        <div style={{ display: 'inline-block', marginLeft: '20px', position: 'relative' }}>
          <img src={img2} alt="Image 2" style={{ width: '700px', height: '300px' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            <h1>Mocktail</h1>
            <p>lorem</p>
            <button className='btn btn-success' style={{ padding: '10px', width: '200px', height: '60px' }}>Read More</button>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '60px', marginTop: '100px' }}>
        <h1>The Best Recipies</h1>
      </div>

      <div style={{ display: "flex", margin: '50px', justifyContent: 'center' }}>
        <div style={{ padding: '30px', textAlign: 'center' }}>
          <img src={img3} alt="Image 1" style={{ width: '450px', height: '350px' }} />
          <div style={{ marginTop: '30px' }}>
            <h3>Healthy Fruit Desert</h3>
          </div>
        </div>

        <div style={{ padding: '30px', textAlign: 'center' }}>
          <img src={img4} alt="Image 1" style={{ width: '450px', height: '350px' }} />
          <div style={{ marginTop: '30px' }}>
            <h3>Homemade Burger</h3>
          </div>
        </div>

        <div style={{ padding: '30px', textAlign: 'center' }}>
          <img src={img5} alt="Image 1" style={{ width: '450px', height: '350px' }} />
          <div style={{ marginTop: '30px' }}>
            <h3>Sushi easy recipe</h3>
          </div>
        </div>
        

      </div>
      <div>
        <div style={{ display: 'flex', position: 'relative' }}>
          <img src={img6} alt="Image 1" style={{ width: '100%', height: '700px' ,opacity:'0.9'}} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff' }}>
            <p style={{fontSize:'100px',fontFamily:'inherit'}}>Free Recipes</p>
            <p style={{fontSize:'35px'}}>See all free recipes press below button to navigate recipes page</p>
            <button className='btn btn-success' style={{ padding: '10px', width: '200px', height: '60px',fontSize:'20px' }} onClick={handleNavigate}>See Recipes</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;




