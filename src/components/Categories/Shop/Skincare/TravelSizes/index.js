import React from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_TRAVEL_SIZES = gql`
{
  categoryList(filters: {ids: {in: ["148"] } } ) {
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


function TravelSizes() {
    const { loading, error, data } = useQuery(GET_TRAVEL_SIZES);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {data.categoryList.map((val) => {
            return <li key={val.id}>
            <Link to={'/shop/skincare/travelsizes'}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default TravelSizes;