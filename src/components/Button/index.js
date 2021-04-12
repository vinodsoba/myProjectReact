import React from 'react';
//import * as FaIcons from 'react-icons/fa';
import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size:1.0rem;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => 
    props.cart ? "var(--mainYellow)" :"var(--lightBlue)"};
color:var(--darkBlue);
color: ${props => 
props.cart ? "var(--darkBlue)" : "var(--darkBlue)"};
padding: 0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition: all 0.3s ease-in-out;
&:hover {
    background:var(--lightBlue);
    color: var(--mainBlue);
}
`;


export const ShopNow = [
    {
        title: 'Shop Now',
        path: '/',
        //icon:  <FaIcons.FaHome/>,
        cName: 'btn-shopnow'
    }
]

export const HpMensFragrance = [
    {
        title: 'MENS FRAGRANCE',
        path: '/',
        //icon:  <FaIcons.FaHome/>,
        cName: 'btn-mens'
    }
]

export const HpWomensFragrance = [
    {
        title: 'WOMENS FRAGRANCE',
        path: '/',
        //icon:  <FaIcons.FaHome/>,
        cName: 'btn-womens'
    }
]

export const ButtonName = [
    
    {
        title: 'Buy Now',
        path: '/',
        //icon:  <FaIcons.FaHome/>,
        cName: 'btn-buynow'
    }

]
