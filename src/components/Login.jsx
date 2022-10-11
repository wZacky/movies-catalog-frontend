import { gql, useLazyQuery } from '@apollo/client';
import React, { useContext, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const LOGIN_QUERY = gql`
  query Login ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useOutletContext();
  const {allUserMovies} = useContext(AppContext);

  const navigate = useNavigate();

  const [loginQ, {loading, error, data}] = useLazyQuery(LOGIN_QUERY, {
    onCompleted: (data) => {
      console.log('DATA:', data);
      localStorage.setItem('userId', data.login);

      if (data.login) {
        setCredential(true);
        allUserMovies(data.login)
        navigate("/dashboard");
      } else {
        setCredential(false);
        alert('Invalid credentials')
      }
    },
    onError: (error) => console.log('ERROR: =>', error),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    loginQ({variables: {email, password,}});

    if (!loading) {
      console.log('aun no se procesa');
    }
  }

  if (loading) {
    console.log('cargando');
  }

  if (error) {
    console.log('EROR:', error);
  }

  //console.log(data);
  return (
    <div className='container-fluid' style={{ maxWidth: '580px' }}>
      <h1><span className='badge bg-secondary mt-4'>LOGIN</span></h1>
      <form onSubmit={handleSubmit} className='col mt-5' style={{ maxWidth: '580px' }}>
        <div className="mb-3">
          <label>Email</label>
          <input onChange={e => setEmail(e.target.value)} type="text" placeholder='email' className="form-control" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input onChange={e => setPassword(e.target.value)} type="text" placeholder='password' className="form-control" />
        </div>
      
        <button className='btn btn-outline-primary'>Login</button>
        <button onClick={() => navigate("/")} className='btn btn-outline-warning'>Cancel</button>
      </form>
      
      {/* <p>{data?.login}</p> */}
    </div>
  )
}

export default Login