import React, { Component, Fragment } from 'react'
import Dress from './../Dress'
import { storeProducts } from '../../data'
import { ProductConsumer } from '../Context' 

export default class Dresses extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-5">
                    <div className="container">
                    
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map( product => {
                                     return  <Dress key={product.id} product={product} />;
                                    })

                                }}
                            </ProductConsumer>
                        </div>
                    </div>    
                </div>
            </Fragment>           
        )
    }
}
