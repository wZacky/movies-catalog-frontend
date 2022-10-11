import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
//import Login from './components/Login'

function App() {
  const [credential, setCredential] = useState(false);

  const unlogged = () => {
    setCredential(false)
  }
  
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      setCredential(true)
    }
  }, [credential])

  return (
    <div className="container container-sm container-lg container-xl">
      <Navbar loggedIn={credential} setCredential={unlogged} />
      <Outlet context={[credential, setCredential]} />
    </div>
  )
}

export default App
