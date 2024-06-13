import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.jpg"
//import './styles.css';

function Nav() {
  return (
    <nav className="nav">
        <img src={logo} alt='headerlogo' width={240} height={135}/>
        <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li id='m'><Link to="/menu">Menu</Link></li>
            <li id='a'><Link to="/about">About</Link></li>
            <li id='r'><Link to="/reservations">Reservations</Link></li>
            <li id='o'><Link to="/order-online">Order Online</Link></li>
            <li id='l'><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  );
}

export default Nav;