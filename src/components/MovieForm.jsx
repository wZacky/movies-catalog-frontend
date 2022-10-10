import { gql, useMutation } from '@apollo/client'
import React, { useState } from 'react'

const ADD_MOVIE = gql`
  mutation AddMovie($title: String!,$image: String!,$description: String!,$registeredBy: String!,$likes: Int) {
    addMovie(title: $title,image: $image,description: $description,registeredBy: $registeredBy,likes: $likes) {
      title
      description
      image
      likes
      registeredBy
    }
  }
`

function MovieForm() {
  const [values, setValues] = useState({
    title: '',
    description: '',
    image: '',
    likes: 0,
  })

  const [addMovieMutation, { loading, data, error }] = useMutation(ADD_MOVIE, {
    onCompleted: (data) => {
      console.log(data);
    }
  })

  const handleChangeInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
    //console.log(e);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    //console.log({ ...values, registeredBy: userId });
    const { title, description, image, likes } = values;
    console.log(values);
    addMovieMutation({
      variables: {
        title,
        image,
        description,
        registeredBy: userId,
        likes: Number(likes),
      }
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Title</label>
      <input onChange={handleChangeInput} type="text" name='title' required />

      <label htmlFor="">Description</label>
      <textarea onChange={handleChangeInput} name='description' cols={10} rows={5} required />

      <label htmlFor="">URL Image</label>
      <input onChange={handleChangeInput} type="text" name='image' required />

      <label htmlFor="">Likes</label>
      <input onChange={handleChangeInput} type='number' name='likes' />

      <button>Register</button>
    </form>
  )
}

export default MovieForm