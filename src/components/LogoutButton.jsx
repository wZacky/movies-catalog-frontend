import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';

function LogoutButton(props) {
  console.log(props);
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem('userId');
    //console.log(localStorage);
    //setCredential(false);
    props.setCredential(false);
    navigate("/", {replace: true})
  }
  return (
    <button onClick={handleClick} className="btn bg-logout-btn btn-sm ms-5">
      Logout
    </button>
  )
}

export default LogoutButton