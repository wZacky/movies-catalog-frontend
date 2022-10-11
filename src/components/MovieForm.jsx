import { gql, useMutation } from '@apollo/client'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ADD_MOVIE = gql`
  mutation AddMovie($title: String!,$image: String!,$description: String!,$registeredBy: String!,$likes: Int) {
    addMovie(title: $title,image: $image,description: $description,registeredBy: $registeredBy,likes: $likes) {
      id
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
  const contextObject = useContext(AppContext);
  const navigate = useNavigate();

  let movieId = '';
  const [addMovieMutation, { loading, data, error }] = useMutation(ADD_MOVIE, {
    onCompleted: (data) => {
      console.log(data);
      movieId = data.addMovie.id;
      const userId = localStorage.getItem('userId');
      const { title, description, image, likes } = values;
      contextObject.addMovie({
        id: movieId,
        title,
        image,
        description,
        registeredBy: userId,
        likes: Number(likes),
      });
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
    });

    //console.log(data.addMovie.id);

    navigate("/dashboard", { replace: true });
  }
  return (
    <div className='container' style={{ maxWidth: '580px' }}>
      <h1><span className='badge bg-secondary mt-4'>ADD MOVIE</span></h1>
      <form onSubmit={handleSubmit} className='col mt-5' style={{ maxWidth: '580px' }}>
        <div className="mb-3">
          <label htmlFor="titleInput">Title</label>
          <input onChange={handleChangeInput} className="form-control" type="text" name='title' id='titleInput' required />
        </div>

        <div className="mb-3">
          <label htmlFor="descriptionInput">Description</label>
          <textarea onChange={handleChangeInput} className="form-control" name='description' cols={10} rows={5} id='descriptionInput' required />
        </div>

        <div className="mb-3">
          <label htmlFor="imageInput">URL Image</label>
          <input onChange={handleChangeInput} className="form-control" type="text" name='image' id='imageInput' required />
        </div>

        <div className="mb-3">
          <label htmlFor="likesInput">Likes</label>
          <input onChange={handleChangeInput} className="form-control" type='number' name='likes' id='likesInput' />
        </div>
        <button className='btn btn-outline-primary'>Register</button>

      </form>
    </div>
  )
}

export default MovieForm