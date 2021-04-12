import React, { Component } from 'react'
import { ProductConsumer } from './../Context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './../Button'

export default class Details extends Component {
    render() {
        return (
                   
        <ProductConsumer>
        {(value) => {
           const {id,name,img, description,price,inCart} = value.detailProduct;
            console.log(value);
           return (
               <div className="container py-5">
                   {/* title */}
                   <div className="row">
                       <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 mx-auto text-center text-slanted text-blue my-5">
                           <h1>{name}</h1>
                       </div>
                   </div>
                   {/* end title */}
                   <div className="row">
                   <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img src={img} className="img-fluid" alt="product"/>
                    </div>
                       <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                        <h2 className="my-5">£{price}</h2>
                            <p>{description}</p>
                            {/* buttons */}
                       <div>
                       <Link to="/">
                           <ButtonContainer>
                               back to products
                           </ButtonContainer>
                       </Link>
                       <ButtonContainer
                       cart
                       disabled={inCart ? true : false }
                           
                        onClick={() => {
                            value.addToCart(id);
                            value.openModal(id);
                        }}>
                        {inCart ? 'inCart' : "add to cart"}
                       </ButtonContainer>
                       </div>
                       </div>
                      
                       
                   </div>
                   
               </div>
               
           )
        }}

    </ProductConsumer>
       
          
            
        )
    }
}
