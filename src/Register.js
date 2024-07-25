import React, { useState } from 'react';
import logo from './logo.png'
import background from "./food.jpg"
import axios from "axios";

function Register () {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name , setName ] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:4000/auth/register", {
        name,
        username,
        password,
      });
      setName("");
      setUsername("");
      setPassword("");
      alert("Registration Completed.....! ");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '780px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${background})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
      }}>
        <div style={{
           padding: '40px',
           borderRadius: '15px',
           boxShadow: '0 0 8px rgba(0, 0, 0, 0.3)',
           textAlign: 'center',
           background: 'rgba(0,0,0,0.9)',
           width: '700px'
        }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px',
              marginBottom: '20px',
            }}
          />
          <form onSubmit={handleRegister}>
          <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                fontSize: '16px',
                border: '1px solid white',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                color: 'white'
              }}
            />
            <input
              type="username"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                fontSize: '16px',
                border: '1px solid white',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                color: 'white'
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '15px',
                marginBottom: '20px',
                fontSize: '16px',
                border: '1px solid white',
                borderRadius: '4px',
                backgroundColor: 'transparent',
                color: 'white'
              }}
            />
            <button type="submit" style={{
              width: '100%',
              padding: '15px',
              fontSize: '20px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>
              Register
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Register;