import React from 'react'
import DeleteButton from './DeleteButton'

function MovieCard({ movie, updateList }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.id}</p>
      <p>{movie.description}</p>
      <p>{movie.image}</p>
      <p>{movie.likes}</p>

      <button type='button'>Like</button>
      <DeleteButton movieId={movie.id} updateList={updateList} />
    </div>
  )
}

export default MovieCard