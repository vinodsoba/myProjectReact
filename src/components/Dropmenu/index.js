import React, { useState } from 'react'
import { MenuItems } from "./../../components/MenuItems"
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'

import NavMenuItems from './../NavMenuItems'

// Categories

import * as FaIcons from 'react-icons/fa';
import './styles.scss' 

function Dropdown () {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const [isShown, setIsShown] = useState(false);
   
    const [isShop, setIsShop] = useState(false);

    return(
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={handleClick} />
                </Link>
            </div>
            <Spring
                from={{ opactiy: 0, marginTop: -500 }}
                to={{ opactiy: 1, marginTop: 0}}
            >
            {props => (
            <nav className={click ? 'nav-menu active' : 'nav-menu' }>
                <ul style={props} className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#'
                        className='menu-bars'>
                            <FaIcons.FaTimes />
                        </Link>
                    </li>
                    {MenuItems.map(item => (
                        <li key={item.id}>{item.icon}<Link className={item.cName} to={item.path}>{item.title}</Link></li>
                    ))}
                    
                    <li><NavMenuItems /></li> 
                 </ul>
            </nav>
             )}
        </Spring>       
      </>      
    )
}

export default Dropdown;