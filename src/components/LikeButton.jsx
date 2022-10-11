import { gql, useMutation } from '@apollo/client'
import React from 'react'

const UPDATE_LIKES = gql`
  mutation UpdateLikes($id: String!, $likes: Int!){
    updateLikes(movieId: $id, likes: $likes)
  }
`

function LikeButton({ movieId, likes, refreshNumberLikes }) {
  const [updateLikesMutation, { loading, data, error }] = useMutation(UPDATE_LIKES, {
    onCompleted: (data) => {
      console.log(data);
      console.log(data.updateLikes);
    }
  })

  const handleClick = (id, likes) => {
    updateLikesMutation({variables: {id, likes: likes+1,}})
    console.log(data?.updateLikes);
    refreshNumberLikes(likes+1)
  }

  return (
    <button onClick={() => handleClick(movieId, likes)} className='bg-like-btn btn'>
      Like
    </button>
  )
}

export default LikeButton