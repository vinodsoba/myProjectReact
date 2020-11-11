import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';

//styles
import './default.scss';

// hoc
import WithAuth from './hoc/withAuth';

//import Table from './Table';

// layouts
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Product from './pages/Product';
import Login from './pages/Login';
import Logout from './pages/Logout';

import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';


import './default.scss'


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          }));
        })
      }
      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      authListener();
    };
  }, []);

    return (
      <div className="App">
        <div className="main">
          <Route exact path='/' render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )} />
        <Route path='/registration' render={() =>  (
              <MainLayout>
                <Registration />
              </MainLayout>
          )} />
          <Route path='/login'
          render={() =>  (
              <MainLayout>
                <Login />
              </MainLayout>
          )} />
          <Route path='/logout'
          render={() => (
              <MainLayout>
                <Logout />
              </MainLayout>
          )} />
        <Route path='/recovery' render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
          )} />

        <Route path='/dashboard' render={() => (
              <WithAuth>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </WithAuth>
            )} />

          <Route path='/product' render={() => (
              <HomepageLayout>
                <Product />
              </HomepageLayout>
            )} />
        </div>
      </div>

    );
  }


export default App;
