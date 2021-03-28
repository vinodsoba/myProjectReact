import React, { Component } from 'react'
import MensFragrance from './../../../../components/MensFragrance'
import './styles.scss'



export default class Index extends Component {
    render() {
        return (
            <div className="mens-fragrance">
                <h1>Mens Fragrance</h1>  
                <MensFragrance />              
            </div>
        )
    }
}
