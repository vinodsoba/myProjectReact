import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/SideBar'
import './../default.scss';


const LeftSideBar = props => {
  return (
    <div className="fullHeight">       
        <Header {...props} />
        <SideBar {...props} />
            {props.children}
        <Footer />
    </div>
  );
}

export default LeftSideBar;