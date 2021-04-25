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
import SidebarLayout from './layouts/SidebarLayout';

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
import InsertData from './pages/InsertData';
import Animate from './pages/Animate';
import MensFragrance from './pages/Shop/Fragrance/Mens';
import WomensFragrance from './pages/Shop/Fragrance/WomensFragrance';
import Test from './pages/Test';
import Details from './pages/Details';
import ProductDescription from './pages/ProductDescription';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Brand from './pages/Brand';
import Contact from './pages/Contact'

//skincare
import FaceMositurisers from './pages/Shop/Skincare/FaceMositurisers';
import TravelSizes from './pages/Shop/Skincare/TravelSizes';

import './default.scss'



// apollo client
import { ApolloClient, InMemoryCache } from '@apollo/client';



const client = new ApolloClient({
  uri: 'https://local.magento.com/graphql',
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
           <Route path='/brands'
          render={() =>  (
              <MainLayout>
                <Brand />
              </MainLayout>
          )} />
          <Route path='/contact'
          render={() =>  (
              <MainLayout>
                <Contact />
              </MainLayout>
          )} />
         <Route path='/details'
          render={() =>  (
              <MainLayout>
                <Details />
              </MainLayout>
          )} />
        <Route path='/shop/skincare/travelsizes'
          render={() => (
            <SidebarLayout>
              <TravelSizes />
            </SidebarLayout>
          )} />

        <Route path='/shop/skincare/facemoisturisers'
          render={() => (
            <SidebarLayout>
              <FaceMositurisers />
            </SidebarLayout>
          )} />
         
          <Route path='/shop/fragrance/mens'
          render={() => (
            <SidebarLayout>
              <MensFragrance />
            </SidebarLayout>
          )} />
          <Route path='/shop/fragrance/womens'
          render={() => (
            <SidebarLayout>
              <WomensFragrance />
            </SidebarLayout>
          )} />
          <Route path='/logout'
          render={() => (
              <MainLayout>
                <Logout />
              </MainLayout>
          )} />

        <Route path='/animate'
          render={() => (
              <MainLayout>
                <Animate />
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

        <Route path='/insert' render={() => (
              <WithAuth>
                <MainLayout>
                  <InsertData />
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

            <Route path='/test' render={() => (
                    <HomepageLayout>
                      <Test />
                    </HomepageLayout>
                  )} />
            <Route path='/User/:userid' component={User} />
        </div>
      </div>
    </ApolloProvider>
    );
  }


export default App;
