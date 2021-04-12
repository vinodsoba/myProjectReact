import React from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_FACE_MOISTURISERS = gql`
{
  categoryList(filters: {ids: {in: ["143"] } } ) {
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


function FaceMoisturisers() {
    const { loading, error, data } = useQuery(GET_FACE_MOISTURISERS);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {data.categoryList.map((val) => {
            return <li key={val.id}>
            <Link to={'/shop/skincare/facemoisturisers'}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default FaceMoisturisers;