import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const MenuItems = [
    
    {
        title: 'Home',
        path: '/',
        icon:  <FaIcons.FaHome/>,
        cName: 'dropdown-link'
    },
    {
        title: 'Brands',
        path: '/brands',
        icon:  <FaIcons.FaStar/>,
        cName: 'dropdown-link'       
    },
    {
        title: 'Contact',
        path: '/contact',
        icon:  <FaIcons.FaAddressBook/>,
        cName: 'dropdown-link'
    }

]