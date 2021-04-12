import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import SectionFragrance from './../components/SectionFragrance';
import './../default.scss';


const HomepageLayout = props => {
  return (
    <div className="fullHeight">
    <Header {...props} />
        {props.children}
    <SectionFragrance />
    <Footer />
    </div>
  );
}

export default HomepageLayout;
