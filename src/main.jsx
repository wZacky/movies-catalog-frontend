import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import router from './routes.jsx'
import Navbar from './components/Navbar'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ApolloProvider>
  </React.StrictMode>
)
