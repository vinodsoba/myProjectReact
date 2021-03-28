import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import './styles.scss';

const GET_PRODUCTS = gql`
{
  products(pageSize: 10, currentPage:1, filter: {
      category_id: {eq: "5"} }){
      total_count
      items {
          id 
          name
          url_key
          image {
              url
          }
      }
  }
}
`;


function Launches() {
  const [products, setProducts] = useState([]);
  const { loading, error, data } = useQuery(GET_PRODUCTS);  

  

  useEffect(() => {
    if(data) {
      const _products = data.products?.items.map(item => ({
        id: item.id,
        name: item.name,
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
        <h1>This is the Api page</h1>
        <ul className="product-listing">
        {products.map((val) => {
          return <li key={val.id}>
          Id: {val.id},
          Product Name: {val.name},
          <Link to={val.image}>
          <img src={val.image} width='200' height='200'/> 
          </Link></li>
        })}

        </ul>
        
      </div>
    );
  
}

export default Launches;
