import React from 'react';
import shopMen from './../../assets/shopMen.jpg';
import shopWomen from './../../assets/shopWomen.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
      <div
      className="item"
      style={{
          backgroundImage: `url(${shopMen})`
      }}>
        <a>shop men</a>
      </div>
      <div
      className="item"
      style={{
          backgroundImage: `url(${shopWomen})`
      }}>
      <a>shop women</a>
      </div>
      </div>
    </div>
  );
};

export default Directory;
