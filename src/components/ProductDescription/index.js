import React, { useEffect, useState  } from 'react'
import { gql, useQuery } from '@apollo/client'
import { Route } from 'react-router-dom'

const GET_DESCRIPTION = gql`
{ 
    products(filter: {sku: {eq: "DRS0016" }}) {
       items {
         id
         name
         sku
        url_key
          media_gallery {
           url
           label
            }
        }
    }
   
  }
`;

export default function ProductDescription() {
    const [products, setProducts ] = useState([]);

    const { loading, error, data } = useQuery(GET_DESCRIPTION);

    useEffect(() => {
        if(data){
            const _products = data.products?.items.map(item => ({
                id: item.id,
                name: item.name,
            }))
            setProducts(_products || [] );
           
       
        }   
    }, [data]);

    if(loading){ return <p>..loading</p>}
    if(error){ return <p>..error :-( </p> }


  
    console.log(data);
    return (
        <div>
            <h1>Hello From Product Description Component</h1>
            {products.map(value => {
                return (
                <ul>
                    <li key={value.id}>{value.id}</li>
                    <li>{value.name}</li>
                   
                </ul>
                )
            })

            }
            
        </div>
    )
}
