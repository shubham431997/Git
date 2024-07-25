
import './App.css';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Home1 from './Home1';
import Home from './Home';
import Navbar from './ Navbar';
import Footer from './Footer';
import CreateRecipes from './CreateRecipes';

function App() {
  return (
    <div >
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home1 />} />
          <Route path="/create-recipe" element={<CreateRecipes />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
      <Footer/>
        
    </div>
  );
}

export default App;
