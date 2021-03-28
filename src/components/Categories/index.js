import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORY = gql`
{
  category(id: 60) {
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


function Category() {
  
  const { loading, error, data } = useQuery(GET_CATEGORY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {data.category.map((val) => {
            return <li key={val.id}>
            <Link to={val.url_path}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default Category;
