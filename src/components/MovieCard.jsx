import React, { useState } from 'react'
import DeleteButton from './DeleteButton'
import LikeButton from './LikeButton'

function MovieCard({ movie, updateList }) {
  const [likes, setLikes] = useState(movie.likes);

  const refreshNumberLikes = (newTotal) => {
    setLikes(newTotal)
  }

  return (
    <div className='bg-card row row-cols-2 mx-4 gy-2 shadow p-1 rounded' style={{width: "350px"}}>
      <div className='col'>
        <img alt='image movie' src={movie.image} />
      </div>
      <div className='col'>
        <div className='row'>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p><i>Likes:</i> {likes}</p>
        </div>
        <div className='row'>
          <LikeButton movieId={movie.id} likes={likes} refreshNumberLikes={refreshNumberLikes} />
          <DeleteButton movieId={movie.id} updateList={updateList} />
        </div>
      </div>
    </div>
  )
}

export default MovieCard