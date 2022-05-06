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
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contact' element={<Contact/>} />
          
          <Route element={<ProtectRoute/>}>
          <Route path='/profile' element={<Profile/>} />
         
          </Route>

          <Route element={<AdminProtectRoute/>}>
          <Route path='/dashboard' element={<AdminDashboard/>} />
          </Route>
        </Routes>
        
        
      
    </div>
  );
}

export default App;
