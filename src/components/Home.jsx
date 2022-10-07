import { gql, useQuery } from '@apollo/client'
import React from 'react'

const CATALOG = gql`
  query {
    generalCatalog {
      id
      title
      image
      description
      likes
    }
  }
`
function Home() {
  const {loading, error, data} = useQuery(CATALOG)

  if (loading) {
    return <p>LOADING</p>
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {data.generalCatalog.map((movie,index) => {
        console.log(movie);
        return (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.id}</p>
            <p>{movie.description}</p>
            <p>{movie.image}</p>
            <p>{movie.likes}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Home