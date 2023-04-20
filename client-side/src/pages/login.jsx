
import React, { useState } from 'react'
import '../assets/css/login.css'
import sideform from '../assets/images/sideform.svg'
import GoogleIcon from '@mui/icons-material/Google';
import vector from '../assets/images/Vector.svg'
import content from '../assets/images/content.svg'
import Button from '@mui/material/Button';
import Header from '../layouts/Header';
import { PrimaryButton } from '../layouts/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';



const Login = () => {

    let navigate =useNavigate()

    const [loginInput,setLogininput]=useState(
        {
            email:'',
            password:''
        }
    );
    const  handleInput = (e)=>{
        setLogininput({...loginInput,[e.target.name]:e.target.value})
    }


    const handlesubmit = (e)=>{
        e.preventDefault()
        const data ={
            email:loginInput.email,
            password:loginInput.password
        }
        console.log(data)
        axios.post('http://localhost:8000/api/login',data)
        .then(res=>{
            console.log(res.data)
            if(res.status===200 && res.data.user.role==='etudiant'){
                // toreuser data in local storage
                // remove user data from local storage
                // localStorage.removeItem('user')
                localStorage.setItem('user',JSON.stringify(res.data.user))
                console.log(JSON.parse(localStorage.getItem('user')))
                navigate('/etudiant/dashboard')
            }
            if(res.status===200 && res.data.user.role==='admin'){
                localStorage.setItem('user',JSON.stringify(res.data.user))
                console.log(JSON.parse(localStorage.getItem('user')))
                navigate('/admin/dashboard')
            }
        })
        .catch(err=>{
            if(err.response && err.response.status=== 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something is wrong!',
                })  
            }
        })
    }


  return (
    <div className="LoginPage">
        <Header/>
        <div className='login-section'>
            <form onSubmit={handlesubmit}>
            <div className='form-Container'>
                <div className='form-header'>
                    <h1>Se connecter</h1>
                    <Button 
                    variant="outlined" 
                    startIcon={<GoogleIcon/>} 
                    className='btn-google'
                    // onClick={handleGoogleLogin}
                    >
                    Se connecter avec Google
                    </Button>
                </div>
                <div className='form-body'>
                    <input type='email' name='email' value={loginInput.email} onChange={handleInput} placeholder='Nom@gmail.com'/>
                    <input type='password' name='password' value={loginInput.password} onChange={handleInput} placeholder='mot de passe'/>
                    <div className='form-btn'>
                        <span>Oublier mot de passe?</span>
                    <div className='check'>
                    <input type="checkbox" name="staylogin" className='checkbox'/>
                    <span>Souviens de moi</span>
                    </div>
                    </div>
                </div>
                <div className='form-footer'>
                    <PrimaryButton text='Se connecter' onClick={handlesubmit}/>
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