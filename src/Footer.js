import React from "react";
import { SocialIcon } from 'react-social-icons'
import background1 from './images/1.jpg'
import background2 from './images/2.jpg'
import background3 from './images/3.jpg'
import background4 from './images/4.jpeg'
import background5 from './images/5.jpeg'
import background6 from './images/6.jpg'
import './Footer.css'

function Footer() {
  return (
    <div style={{marginTop:'40px'}}>
      <footer className="bg-light text-light py-3">
        <div style={{justifyContent:'center',color:'black'}}>
          <p style={{fontSize:'25px',marginLeft:'80px'}}>Follow Us on Instagram for more pictures</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop:"40px" }}>
          <img src={`${background1}`} width={300} height={300} style={{ marginRight: '10px', transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          <img src={`${background2}`} width={300} height={300} style={{ marginRight: '10px', transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          <img src={`${background3}`} width={300} height={300} style={{ marginRight: '10px', transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          <img src={`${background4}`} width={300} height={300} style={{ marginRight: '10px', transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          <img src={`${background5}`} width={300} height={300} style={{ marginRight: '10px', transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
          <img src={`${background6}`} width={250} height={300} style={{ transition: 'transform 0.4s' }} onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'} />
        </div>
      <div className="container" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div className="row">
          <div className="col-md-4" style={{color:'black'}}>
            <h4 style={{color:'blue',marginTop:'30px'}}>Contact Us</h4>
            <p>For inquiries and support:</p>
            <p>Phone: +91 000-000-0000</p>
            <p>Email: info@gmail.com</p>
            <p>Website: <a href="https://www.recipes.com" className="text-dark">www.recipes.com</a></p>
          </div>
          <div className="col-md-6" style={{ padding: '50px' }}>
            <h4 style={{color:'red'}}>Follow Us</h4>
            <div className="social-icons" >
              <SocialIcon url="https://twitter.com" />{" "}
              <SocialIcon url="https://facebook.com" />{" "}
              <SocialIcon url="https://instagram.com" />{" "}
              <SocialIcon url="https://github.com" />
            </div>
          </div>
        </div>
        <h5>© 2024 Recipes.com. All rights reserved.</h5>
      </div>
    </footer>
    </div >
  );
}

export default Footer;