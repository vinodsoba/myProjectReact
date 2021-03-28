import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import { auth } from './../../firebase/utils';
import Logo from './../../assets/bbop-logo.jpg';
import Registration from './../../pages/Registration';
import Product from './../../pages/Product';
import WelcomeMsg from './../../components/WelcomeMessage';
import Login from './../../pages/Login';
import Logout from './../../pages/Logout';
import { Link } from 'react-router-dom';
import Dropdown from '../Dropmenu';




const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const Header = props => {
  const { currentUser } = useSelector(mapState);
 

  return (
    <header className="header">
      <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className='bars'>
      <Dropdown/>
      </div>  
          
        <div className="callToActions">
        {currentUser && (
          <ul>
            <li>
              <span onClick={() =>  auth.signOut()}>
                <Link to="/logout">
                  Logout
                </Link>
              </span>
            </li>
            <li>
              <Link to="/dashboard">
              My Account
            </Link>
            </li>
            <li>
              <Link to="/insert">
              Insert
            </Link>
            </li>
        </ul>
        )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">
                Register
              </Link>
              </li>
              <li>
                <Link to="/api">
                  Product
                </Link>
              </li>
              <li>
                <Link to="login">
                  Login
                </Link>
              </li>
            </ul>
          )}
          
        </div>
        </div>    
    </header>
  );
}

export default Header;
