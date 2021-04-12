import React from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_SKINCARE = gql`
{
  categoryList(filters: {ids: {in: ["142"] } } ) {
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


function Skincare() {
    const { loading, error, data } = useQuery(GET_SKINCARE);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {data.categoryList.map((val) => {
            return <li key={val.id}>
            <Link to={val.url_path}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default Skincare;