import React from 'react'
import { Link } from 'react-router-dom'
import UserIcon from './../../assets/userIcon.png'
import BasketIcon from './../../assets/basket-icon.png'
import './styles.scss'


const TopBar = props => {
  
    return (
        <div className="top-bar">
            <h1>SALE NOW ON: SHOP NOW</h1>
           
            <ul>
                <li><Link>Contact Us</Link></li>
                <li><a href="https://dev.magento.com/customer/account/login"><img src={UserIcon} width="30" height="30"/> <u>Account</u></a></li>
                <li><a href="https://dev.magento.com/checkout/cart/"><img src={BasketIcon} width="40" height="40"/><u>My Cart</u></a></li>
            </ul>
        </div>
    )
}



export default TopBar 

