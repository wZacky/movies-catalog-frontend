import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
//import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
