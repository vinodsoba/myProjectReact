import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORY = gql
`
{
  categoryList(filters: {ids: {in: ["135"] }}) {
    name
    children_count
    children {
      id
      level
      name
      path
      url_path
      url_key
      children {
        id
        level
        name
        path
        children {
          id
          level
          name
          path
          children {
            id
            level
            name
            path
          }
        }
      }
    }
  }
}
`;


function Fragrance() {
  const { loading, error, data } = useQuery(GET_CATEGORY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    
  return (
    <div>      
        {
          data.categoryList.map(({ id, name }) => (
              <div key={id}>
                <ul>
                  <li></li>
                </ul>          
            </div>
            ))
        }        
    </div>  
  )
 
  
}

export default Fragrance;
