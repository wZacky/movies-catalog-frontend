import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';

const LOGIN_QUERY = gql`
  query Login ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [credential, setCredential] = useOutletContext();

  const navigate = useNavigate();

  const [loginQ, {loading, error, data}] = useLazyQuery(LOGIN_QUERY, {
    onCompleted: (data) => {
      console.log('DATA:', data);
      localStorage.setItem('userId', data.login);

      if (data.login) {
        setCredential(true);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={e => setEmail(e.target.value)} type="text" placeholder='email' />
        <input onChange={e => setPassword(e.target.value)} type="text" placeholder='password' />
      
        <button>Login</button>
      </form>
      
      <p>{data?.login}</p>
    </div>
  )
}

export default Login