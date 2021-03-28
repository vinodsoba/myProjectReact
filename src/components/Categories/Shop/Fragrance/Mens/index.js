import React from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_MENS = gql`
{
  categoryList(filters: {ids: {in: ["137"] } } ) {
      name
      id
      url_path
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


function Mens() {
    const { loading, error, data } = useQuery(GET_MENS);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {data.categoryList.map((val, id) => {
            return <li key={val.id}>
            <Link to={val.url_key}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default Mens;