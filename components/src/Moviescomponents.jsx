import React from 'react'

import {movies_collection} from './datastores/Data'

const fetchmoviedata=()=> {
  return movies_collection;
}

const Moviescomponents = () => {
  return (
    <div className='movie-container'>
      <h2>WELCOME TO THE MOVIES COLLECTION DATABASE</h2>
      <ul>
        {
          movies_collection.map((data,index)=>{
            return <li>{data.moviename}
              <p>Rating of the movies the {data.moviename} is {data.rating}</p>
              <h4>the year of relase is {data.year}</h4>
           
            </li>
            
          })
        }
      </ul>
    </div>
  )
}

export default Moviescomponents
