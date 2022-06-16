import React from "react";
import './Header.css'
import {Link } from 'react-router-dom'

function Header() {
  return (
    <div className = 'container'>
      <div className="background"></div>
        <div className="nav">
          <h1 className='main-caption'>Steam High</h1>
          <div className = 'ui_stuff'>
            <Link to='/about' className='about-caption'>About</Link>
            <Link to='/user-terms' className='user-caption'>User Terms</Link>
            <Link to='/cart' className='bucket-caption'>Cart</Link>
          </div>
          
      </div>
    </div>
  );
}

export default Header;