import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';


import Shop from './Shop';
//fragrance
import Mens from './Fragrance/Mens';
import Womens from './Fragrance/Womens';
import './styles.scss'
//skincare
import Skincare from './../../components/Categories/Shop/Skincare'
import FaceMoisturisers from './../../components/Categories/Shop/Skincare/FaceMoisturisers'
import TravelSizes from './../../components/Categories/Shop/Skincare/TravelSizes'


function Category() {

  const [isShown, setIsShown] = useState(false);

  //subnav Fragrance
  const [subnavisShown, setSubNavIsShown] = useState(false);

  //subnav Skincare
  const [subnavskinCare, setSubNavSkincare] = useState(false);


  
  return (
    <Fragment>
      <ul className="dropdown">
          <li onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(true)}><Link className="shop-button" to={'/'}><Shop /></Link></li>  
          {isShown && ( 
            <ul>
              <li onMouseEnter={() => setSubNavIsShown(true)} onMouseLeave={() => setSubNavIsShown(true)}>Fragrance</li>
            </ul>
          )}
             {subnavisShown && (
              <ul >
                  <li onMouseEnter={() => setSubNavIsShown(true)} onMouseLeave={() => setSubNavIsShown(false)}><Mens /></li>
                  <li onMouseEnter={() => setSubNavIsShown(true)} onMouseLeave={() => setSubNavIsShown(false)}><Womens /></li>
              </ul>
              )}
            {isShown && ( 
            <li onMouseEnter={() => setSubNavSkincare(true)} onMouseLeave={() => setSubNavSkincare(true)}><Skincare /></li>
            )}

            {subnavskinCare && (
              <ul >
                  <li onMouseEnter={() => setSubNavSkincare(true)} onMouseLeave={() => setSubNavSkincare(false)}><FaceMoisturisers /></li>
                  <li onMouseEnter={() => setSubNavSkincare(true)} onMouseLeave={() => setSubNavSkincare(false)}><TravelSizes /></li>
              </ul>
              )} 
      
      </ul>  
    </Fragment>  
  )
}

export default Category;
