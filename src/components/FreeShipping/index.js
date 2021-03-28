import React from 'react'
import * as FaIcons from 'react-icons/fa'
import  './styles.scss'

function freeshipping() {
    return (
        <div className='freeshipping'>
            <span><FaIcons.FaTruck/></span>           
            <h1>Free Shipping on Orders over £100</h1>
        </div>
    )
}

export default freeshipping;
