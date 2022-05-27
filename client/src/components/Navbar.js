import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { logoutAction } from '../actions/userActions';
import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const {isAuth, userInfo} = useSelector(state=>state.user);
  const logout = (e) => {
      console.log('hii')
    e.preventDefault();
    dispatch(logoutAction())
  }
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='Navbar'>
      <span className='nav-logo'>Atelier Med Concept</span>
    <div className={`nav-items ${isOpen && 'open'}`}>
        <Link to= '/'>Home</Link> 
        {isAuth ? (
          <> 
          <Link to= '/profile'>{userInfo.name}</Link>
          <button className="button-logout" onClick={logout}>Logout</button>
          </>
        ) : (
          <> 
          <Link to= '/login'>Login</Link>| <Link to= '/register'>Register</Link> | <Link to= '/contact'>Contact</Link>| <Link to= '/Demanderundevis'>Demander un devis</Link>
          </>

        )}
    </div>
    <div className={`nav-toggle ${isOpen && "open"}`}
     onClick={() => setIsOpen(isOpen)}>
      <div className='bar'></div>

    </div>
    </div>
  );
};

export default Navbar

