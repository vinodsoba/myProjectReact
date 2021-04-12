import React from 'react'
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';


export default function index() {
    return (
        <div>
            <Link><FaIcons.FaShoppingBasket/> Shop</Link>
        </div>
    )
}
