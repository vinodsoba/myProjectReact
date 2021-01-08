import React from 'react';
import './styles.scss';

//pages
import Products from "./../../components/Products";

//json
import data from "../../data.json";

class Product extends React.Component {
  constructor(){
    super();
    this.state = {
      //products: data.products,
      size: "",
      sort: "",
    }
  }
  render(){
    return (
      <div className="content">
        <div className="main">
          <Products products={this.state.products}/>
        </div>
        <div className="sidebar">
          Cart Items
        </div>
      </div>
    );
  };
};

export default Product;
