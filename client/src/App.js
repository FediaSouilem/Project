import './App.css';
import { Contact } from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ProtectRoute from './components/ProtectRoute';
import AdminDashboard from './pages/AdminDashboard';
import AdminProtectRoute from './components/AdminProtectRoute';
import logo from "./photo/logo.png";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { Demanderundevis } from './pages/Demanderundevis';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/Demanderundevis' element={<Demanderundevis/>} />
          
          <Route element={<ProtectRoute/>}>
          <Route path='/profile' element={<Profile/>} />
         
          </Route>

          <Route element={<AdminProtectRoute/>}>
          <Route path='/dashboard' element={<AdminDashboard/>}/>
          </Route>
        </Routes>
        <body>
          
        </body>
        <footer className= "footer">
          <div className="footer-left">
            <img src={logo} alt='logo'/>
              <p>
              Atelier Med_Concept est un bureau d’architecture fondée en 2014 à Tunis par Mohamed Ali Souilem
                
              </p>
              <div className='socials'>
                <a href ="https://www.facebook.com/Atelier-Med_Concept-106786852034855"><FaFacebook size= "2em" color="white" /></a>
                <a href ="#"><FaInstagram size= "2em" color="white"/></a>
                <a href ="#"><FaLinkedin size= "2em" color="white"/></a>
              </div>
          </div>
          <ul className="footer-right">
            <li>
            <h2>Adresse</h2>
            <ul className='box'>
              <li>Rue 1er Juin, Kalaa kebira, Sousse-Tunisie</li>
              <li>Email: atelier.med.concept@gmail.com </li>
              <li>Mobile: +216 97 699 695 / +216 55 399 695</li>
            </ul>
            </li>
          </ul>
          <div className="footer-bottom">
            <p>Tous droits reservés  </p> 
            <p>Atelier Med_Concept © copyright 2022.</p>

          </div>

        </footer>
        
        
      
    </div>
  );
}

export default App;
