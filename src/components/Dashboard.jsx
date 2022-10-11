import { gql, useLazyQuery, useQuery } from '@apollo/client'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import MovieCard from './MovieCard';

/* const USER_CATALOG = gql`
  query Catalog ($userId: ID!) {
    userCatalog(userId: $userId) {
      id
      title
      image
      description
      likes
    }
  }
` */

function Dashboard() {
  const [movies, setMovies] = useState([]);
  const contextObject = useContext(AppContext);
  /* const [userCatalogQuery, {loading, error, data}]= useLazyQuery(USER_CATALOG, {
    onCompleted: (data) => {
      console.log(data);
      setMovies(data.userCatalog)
    },
    onError: (error) => console.log(error)
  }) */
  
  /* if (loading) {
    console.log('cargando');
  }
  if (error) {
    console.log('EROR:', error);
  } */

  const userId = localStorage.getItem('userId');
  console.log('ID:');
  console.log(userId);

  const updateList = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  useEffect(() => {
    //userCatalogQuery({variables: {userId}})
    setMovies(contextObject.catalog)
    //console.log(data);
  }, [contextObject.catalog])

  if (!movies.length) {
    return <h2>Not data</h2>
  }

  return (
    <div className='mx-auto' >
      <div className='row row-cols-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3'>
        {movies.map((movie) => {
          console.log(movie);
          return (
            <MovieCard key={movie.id} movie={movie} updateList={updateList} />
          )
        })}
      </div>
    </div>
  )
}

export default Dashboard