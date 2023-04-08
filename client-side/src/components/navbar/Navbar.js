import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import swal from 'sweetalert'
import axios from 'axios'

function Navbar(){

  const Navigate = useNavigate();
  const logoutSubmit = (e)=>{
    e.preventDefault();
    
    axios.post('/api/logout').then(res=>{
      if(res.data.status === 200){
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        Navigate('/')
      }
    })
  }

  var AuthButtons = ''
  if(!localStorage.getItem('auth_token')){
    AuthButtons =(
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <link className='nav-link' to ='/login'>Login</link>
        </li>
        <li className='nav-item'>
          <link className='nav-link' to ='/Register'>Register</link>
        </li>
        <li className='nav-item'>
          <link className='nav-link' to ='/Contact'>Contact</link>
        </li>
      </ul>
    )
  }
  else{
    AuthButtons =(
      <li className='nav-item'>
        <button type='button' onClick={logoutSubmit} className='nav-link btn btn-danger btn-sm text-white'>Logout</button>
      </li>
    )
  }
  return(
    <nav className='navbar navbar-expand-lg navbar-light bg'>
      <div className='container'>
        <link to="/" className="navbar-brand">LOGO</link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {AuthButtons}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar