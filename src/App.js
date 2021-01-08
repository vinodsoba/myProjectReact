import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { render, Route, Redirect } from 'react-router-dom';
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

// filter component
import Filter from "./components/Filter";

// pages
import Homepage from './pages/Homepage';
import About from './pages/About';
import Registration from './pages/Registration';
import Product from './pages/Product';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Api from './pages/Api';

import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';


import './default.scss'



// apollo client
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://dev.magento.com/graphql',
  cache: new InMemoryCache()
});

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
      <ApolloProvider client={client}>
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
                <Filter />
                <Product />
              </HomepageLayout>
            )} />

          <Route path='/about' render={() => (
                <HomepageLayout>
                  <About />
                </HomepageLayout>
              )} />

            <Route path='/api' render={() => (
                    <HomepageLayout>
                      <Api />
                    </HomepageLayout>
                  )} />
        </div>
      </div>
    </ApolloProvider>
    );
  }


export default App;
