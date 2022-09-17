import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to = "/" style={{color:"inherit", textDecoration:"none"}}>
              <span className="logo">Hestia Bookings</span>
            </Link>
              {user ? user.username : (
               <div className="navItems">
                  <button className="navButton" onClick={handleLoginClick}>Register</button>
                  <button className="navButton" onClick={handleLoginClick}>Login</button>
              </div>)}
        </div>
    </div>
  )
}

export default Navbar