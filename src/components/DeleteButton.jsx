import { gql, useMutation } from '@apollo/client'
import React from 'react'

const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: String!) {
    deleteMovie(movieId: $id)
  }
`

function DeleteButton({movieId, updateList}) {
  const [deleteMovieMutation, {loading, data, error}] = useMutation(DELETE_MOVIE, {
    onCompleted: (data) => {
      console.log(data);
    }
  })

  const handleClick = (id) => {
    console.log(id);
    deleteMovieMutation({variables: {id,}})

    updateList(id);
  }

  return (
    <button onClick={() => handleClick(movieId)}>
      Delete
    </button>
  )
}

export default DeleteButton