import React from 'react';
import './styles.scss';
//import shopMen from './../../assets/shopMen.jpg';
//import shopWomen from './../../assets/shopWomen.jpg';
import heroImage from './../../assets/heroImage.jpg';
import { ShopNow } from './../../components/Button';

const Directory = props => {
  return (
    <div className="directory">
      <div className="hero-image" style={{ backgroundSize: 'cover', backgroundImage: `url(${heroImage})` }}>
        <div style={{ position: 'absolute', maxWidth: '100%', padding: '0px 0px 0px 20px'}}>
          <h2>Lorem ipsum dolor</h2>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>  
        </div>
        <div style={{ position: 'relative', top: '120px', maxWidth: '600px', padding: '0px 0px 0px 20px'}}>
          {ShopNow.map((item) => {
            return <button className={item.cName}>{item.title}</button>

          })}
          </div>
      </div>
    </div>
  );
};

export default Directory;
