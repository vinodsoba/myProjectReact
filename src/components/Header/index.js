import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import { auth } from './../../firebase/utils';
import Logo from './../../assets/logo.jpg';
import Registration from './../../pages/Registration';
import Product from './../../pages/Product';
import WelcomeMsg from './../../components/WelcomeMessage';
import Login from './../../pages/Login';
import Logout from './../../pages/Logout';
import { Link } from 'react-router-dom';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});


const Header = props => {
  const { currentUser } = useSelector(mapState);

  return (
    <header className="header">
      <div className="wrap">

        <div className="header-container">
          <WelcomeMsg />
        <div className="logo">

          <Link to="/">
          <img src={Logo} alt="logo" />
          </Link>
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
        </ul>
        )}


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
                <Link to="/product">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
            </ul>
          )}
          </div>
        </div>
        </div>
        <div class="navigation">
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
