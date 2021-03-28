import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORY = gql`
{
    category(filters: {ids: {in: ["135"]}}) {
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
          url_path
          url_key
        }
      }
    }
  }
`;


function FragranceCategory() {
  const [category, setCategoryList] = useState([]);
  const { loading, error, data } = useQuery(GET_CATEGORY);  

  useEffect(() => {
    if(data) {
      const _category = data.category?.children.map(item => ({
        id: item.id,
        level:item.level,
        name: item.name,
        url_path: item.url_path
        
      }));
      
      setCategoryList(_category || []);
      console.log(data);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
    return (
      <div>
        <ul>
          {category.map((val) => {
            return <li key={val.id}>
             {val.name}   
            <Link to={val.url_path}>{val.name}</Link>
          </li>
          })}
        </ul>      
      </div>
    );
  
}

export default FragranceCategory;
