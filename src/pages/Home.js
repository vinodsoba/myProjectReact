import React from 'react';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainContent';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import { withStyles } from '@material-ui/core/styles';

function Home() {
  const classes = withStyles();
  return (
      <div className={classes.root}>
        <TopMenu />
        <SideMenu />
        <MainContent />
        <Footer />
      </div>

  );
}

export default Home;
