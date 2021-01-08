import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss'

require('dotenv').config();

const m2_url_key=process.env.REACT_APP_M2_CONFIG_HOST;

console.log(m2_url_key);

const Homepage = props => {
  return (
    <section className="homepage">
      <Directory />
    </section>
  );
};


export default Homepage;
