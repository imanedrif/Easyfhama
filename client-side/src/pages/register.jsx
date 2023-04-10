import React, { useState } from 'react'
import Header from '../layouts/Header';
import vector from '../assets/images/Vector.svg'
import content from '../assets/images/content.svg'
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { PrimaryButton } from '../layouts/Buttons';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerInput,setRegisterinput]=useState(
        {
            nom:'',
            email:'',
            filliere:'',
            classe:'',
            password:'',
        }
    );
    const  handleInput = (e)=>{
        e.persist()
        setRegisterinput({...registerInput,[e.target.name]:e.target.value})
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        const data ={
            nom:registerInput.nom,
            email:registerInput.email,
            filliere:registerInput.filliere,
            classe:registerInput.classe,
            password:registerInput.password
        }
    }    

  return (
    <div>
        <Header/>
        <div className='login-section'>
            <form onSubmit={handlesubmit}>
            <div className='form-Container'>
                <div className='form-header'>
                    <h1>S'inscrire</h1>
                    <Button variant="outlined" startIcon={<GoogleIcon/>} className='btn-google'>S'inscrire avec Google</Button>
                </div>
                <div className='form-body'>
                    <input type='text' name='nom' value={registerInput.nom} onChange={handleInput} placeholder='Nom complet' />
                    <input type='email' name='email' value={registerInput.email} onChange={handleInput} placeholder='Nom@gmail.com'/>
                    <select>
                        <option></option>
                    </select>
                    <input type='password' name='password' value={registerInput.password} onChange={handleInput} placeholder='mot de passe'/>
                </div>
                <div className='form-footer'>
                    <PrimaryButton text='Se connecter' path='/'/>
                    <div className='signup-text'>
                    <span>Vous avez deja un compte? <Link to='/login' className='link'>Se connecter</Link></span>
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

export default Register