import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
//  </React.StrictMode>
)
