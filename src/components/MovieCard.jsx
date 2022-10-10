import React, { useState } from 'react'
import DeleteButton from './DeleteButton'
import LikeButton from './LikeButton'

function MovieCard({ movie, updateList }) {
  const [likes, setLikes] = useState(movie.likes);

  const refreshNumberLikes = (newTotal) => {
    setLikes(newTotal)
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.id}</p>
      <p>{movie.description}</p>
      <p>{movie.image}</p>
      <p>{likes}</p>

      <LikeButton movieId={movie.id} likes={likes} refreshNumberLikes={refreshNumberLikes} />
      <DeleteButton movieId={movie.id} updateList={updateList} />
    </div>
  )
}

export default MovieCard