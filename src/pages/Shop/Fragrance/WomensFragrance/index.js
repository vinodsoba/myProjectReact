import React, { Component } from 'react'
import WomensFragrance from './../../../../components/WomensFragrance'
import './styles.scss'



export default class Index extends Component {
    render() {
        return (
            <div className="womens-fragrance">
                <h1>Womens Fragrance</h1>  
                <WomensFragrance />              
            </div>
        )
    }
}
