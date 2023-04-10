
import React, { useState } from 'react'
import '../assets/css/login.css'
import sideform from '../assets/images/sideform.svg'
import GoogleIcon from '@mui/icons-material/Google';
import vector from '../assets/images/Vector.svg'
import content from '../assets/images/content.svg'
import Button from '@mui/material/Button';
import Header from '../layouts/Header';
import { PrimaryButton } from '../layouts/Buttons';
import { Link } from 'react-router-dom';



const Login = () => {
    const [loginInput,setLogininput]=useState(
        {
            email:'',
            password:''
        }
    );
    const  handleInput = (e)=>{
        e.persist()
        setLogininput({...loginInput,[e.target.name]:e.target.value})
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        const data ={
            email:loginInput.email,
            password:loginInput.password
        }
    }


  return (
    <div className="LoginPage">
        <Header/>
        <div className='login-section'>
            <form onSubmit={handlesubmit}>
            <div className='form-Container'>
                <div className='form-header'>
                    <h1>S'inscrire</h1>
                    <Button variant="outlined" startIcon={<GoogleIcon/>} className='btn-google'>Se connecter avec Google</Button>
                </div>
                <div className='form-body'>
                    <input type='email' name='email' value={loginInput.email} onChange={handleInput} placeholder='Nom@gmail.com'/>
                    <input type='password' name='password' value={loginInput.password} onChange={handleInput} placeholder='mot de passe'/>
                    <div className='form-btn'>
                        <span>Oublier mot de passe?</span>
                    {/* <div className='check'>
                    <input type="checkbox" name="staylogin" className='checkbox'/>
                    <span>Souviens de moi</span> */}
                    {/* </div> */}
                    </div>
                </div>
                <div className='form-footer'>
                    <PrimaryButton text='Se connecter' path='/'/>
                    <div className='signup-text'>
                    <span>Vous n'avez pas un compte ? <Link to='/register' className='link'>S'inscrire</Link></span>
                    </div>
                </div>
            </div>
            </form> 
            <div className='img-container'>
            <img src={vector} className="SideBackground"/>
            <img src={content} className="SideImage"/>
            </div>
        </div>
    </div>
  )
}

export default Login;