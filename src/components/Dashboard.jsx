import { gql, useLazyQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';

const USER_CATALOG = gql`
  query Catalog ($userId: ID!) {
    userCatalog(userId: $userId) {
      id
      title
      image
      description
      likes
    }
  }
`

function Dashboard() {
  const [catalog, setMovies] = useState([]);
  const [userCatalogQuery, {loading, error, data}]= useLazyQuery(USER_CATALOG, {
    onCompleted: (data) => {
      console.log(data);
      setMovies(data.userCatalog)
    },
    onError: (error) => console.log(error)
  })
  //R.isEmpty()
  if (loading) {
    console.log('cargando');
  }

  if (error) {
    console.log('EROR:', error);
  }

  const userId = localStorage.getItem('userId');
  console.log('ID:');
  console.log(userId);

  const updateList = (id) => {
    setMovies(catalog.filter(movie => movie.id !== id))
  }

  useEffect(() => {
    userCatalogQuery({variables: {userId}})
    console.log(data);
  }, [])

  if (!catalog.length) {
    return <h2>Not data</h2>
  }

  return (
    <div>
      {catalog.map((movie) => {
        console.log(movie);
        return (
          <div key={movie.id}>
            <MovieCard movie={movie} updateList={updateList} />
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard