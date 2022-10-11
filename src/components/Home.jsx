import { gql, useQuery } from '@apollo/client'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

/* const CATALOG = gql`
  query {
    generalCatalog {
      id
      title
      image
      description
      likes
    }
  }
` */
function Home() {
  //const { loading, error, data } = useQuery(CATALOG)
  //const [movies, setMovies] = useState([]);
  const {generalCatalog} = useContext(AppContext);

  if (!generalCatalog) {
    console.log(generalCatalog);
    return <p>LOADING</p>
  }

  /* if (error) {
    console.log(error);
  } */

  /* useEffect(() => {
    //setMovies(generalCatalog)
    allMovies()
  }, [generalCatalog]) */

  return (
    <div className='mx-auto mt-3'>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3'>
        {generalCatalog.map((movie) => {
          console.log(movie);
          return (
            <div key={movie.id} className='bg-card row row-cols-2 mx-4 gy-2 shadow p-1 rounded' style={{width: "350px"}}>
              <div className="col">
              <img alt='image movie' src={movie.image} />
              </div>
              <div className="col">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p><i>Likes:</i> {movie.likes}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home