import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate()


  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to = "/" style={{color:"inherit", textDecoration:"none"}}>
              <span className="logo">Hestia Booking</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar