import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ButtonName, ShopNow } from './../../components/Button';
import './styles.scss';

const GET_MENS = gql`
{
  products(pageSize: 10, currentPage:1, filter: {
      category_id: {eq: "137"} }){
      total_count
      items {
          id 
          name
          url_key
          url_path
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
            }
          }
          image {
              url
          }
      }
  }
}
`;


function MensFragrance() {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_MENS);  

  useEffect(() => {
    if(data) {
      const _products = data.products?.items.map(item => ({
        id: item.id,
        name: item.name,
        key: item.url_key,
        value: item.price_range?.minimum_price.regular_price.value,
        image: item.image?.url,
      }));
      
      setProducts(_products || []);
      console.log(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul className="product-listing">
        {products.map((val) => {
          return <li key={val.id}>
          <Link to={val.key}>
          <img src={val.image} width='200' height='200'/> 
          </Link>
          <span class='product-name'>{val.name}</span>
          Price: {val.value}
          {ShopNow.map((item) => {
            return (
              <Link to={item.key} key={item.id}>
                <button class={item.cName}>{item.title}</button>
              </Link>                            
            )
          })}
          </li>
        })}
          
      </ul>  
      
     
      
      
        
      </div>
    );
  
}

export default MensFragrance;
