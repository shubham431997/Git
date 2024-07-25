import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import logo from './logo.png'


function Navbar() {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.clear();
        navigate("/login");
    };
    return (
        <nav className="navbar navbar-light" style={{ height: '150px' ,backgroundColor:'white',width:"100%"}}>
            <a className="navbar-brand" href="/" style={{marginLeft:'200px' }}><img src={logo} width={200} height={150}/></a>
            <div style={{marginRight:'200px'}}>
                <Link to="/" className="button-link" style={{ textDecoration: 'none', fontSize: '25px',color:'black'}}>Home</Link>
                <Link to="/create-recipe" className="button-link" style={{ marginLeft: '20px', textDecoration: 'none', fontSize: '25px',color:'black' }}>Create Recipe</Link>
                <Link to="/saved-recipes" className="button-link" style={{ marginLeft: '20px', textDecoration: 'none', fontSize: '25px' ,color:'black'}}>Saved Recipes</Link>
                {!cookies.access_token ? (
                    <Link to="/login" className="button-link" style={{ marginLeft: '20px', textDecoration: 'none', fontSize: '25px',color:'black' }}>Login/Register</Link>
                ) : (
                    <button onClick={logout}
                    style={{
                        marginLeft:'20px',
                        height:'45px',
                        width:'100px',
                        backgroundColor:'red',
                        color:'white',
                        fontSize:'20px',
                        borderRadius:'8px',
                        
                    }}
                    > Logout </button>
                )}
            </div>
        </nav>
    );
};
export default Navbar;