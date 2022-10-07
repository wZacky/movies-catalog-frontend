import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>
        <h1>Client app</h1>
        <Login />
      </>
    </div>
  )
}

export default App
