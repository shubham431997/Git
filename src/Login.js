import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import background from "./images/bg7.jpg"
import logo from "./logo.png"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const inputStyle = {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    fontSize: '16px',
    border: '1px solid white',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: 'white',
  };

function Login() {
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const Submit = async (event) => {
        event.preventDefault();
    
        try {
          const result = await axios.post("http://localhost:4000/auth/login", {
            username,
            password,
          });
    
          setCookies("access_token", result.data.token);
          window.localStorage.setItem("userID", result.data.userID);
          navigate("/home");
        } catch (error) {
          console.error(error);
        //  alert("Enter correct password")
          toast.error("Enter Correct Password or Username")
        }
      };

      const handleRegister = () => {
        console.log('Redirect to registration page or handle registration logic.');
        navigate("/register");
      };

      
  return (
    <div style={{
        marginTop:'10px',  
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        opacity:'0.9'
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          background: 'rgba(0,0,0,0.9)',
        }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px',
              marginBottom: '10px',
            }}
          />
          <form onSubmit={Submit}>
            <input
              type="text"
              placeholder="Enter Username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            <button type="submit" style={{
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
              Login
            </button>
          </form>
          <button onClick={handleRegister} style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: 'goldenrod',
            color: '#fff',
            border: '1px solid #fff',
            borderRadius: '10px',
            marginTop: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}>
            Register
          </button>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      
  );
};

export default Login