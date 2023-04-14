import React, { useState } from 'react'
import Header from '../layouts/Header';
import vector from '../assets/images/Vector.svg'
import content from '../assets/images/content.svg'
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import { PrimaryButton } from '../layouts/Buttons';
import { Link, useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios'
import Swal from 'sweetalert2'

const Register = () => {
    let navigate = useNavigate()
    const [registerInput, setRegisterinput] = useState(
        {
            nom: '',
            email: '',
            filliere: '',
            classe: '',
            password: '',
        }
        
    );  
    
    const handleInput = (e) => {
        setRegisterinput({ ...registerInput, [e.target.name]: e.target.value });
        // console.log(registerInput)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            nom: registerInput.nom,
            email: registerInput.email,
            filliere: registerInput.filliere,
            classe: registerInput.classe,
            password: registerInput.password
        }
        axios.post('http://localhost:8000/api/register', data)
        .then(res => {
            console.log(res.data)
            if(res.status === 200){
                navigate('/login')
            }
        })
        .catch(err => {
            if (err.response && err.response.status === 401){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something is wrong!',
                })  
        }})
        console.log("Data : ",data)

    }
    
    return (
        <div>
            <Header />
            <div className='login-section'>
                <form onSubmit={handleSubmit}>
                    <div className='form-Container'>
                        <div className='form-header'>
                            <h1>S'inscrire</h1>
                            <Button variant="outlined" startIcon={<GoogleIcon />} className='btn-google'>S'inscrire avec Google</Button>
                        </div>
                        <div className='form-body'>
                            <input type='text' name='nom' value={registerInput.nom} onChange={handleInput} placeholder='Nom complet'/>
                            <input type='email' name='email' value={registerInput.email} onChange={handleInput} placeholder='Nom@gmail.com'/>
                            <div className="select">
                                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Filliere</InputLabel>
                                    <Select
                                        name='filliere'
                                        value={registerInput.filliere}
                                        onChange={handleInput}
                                        >
                                        <MenuItem value=''>
                                            <em>choisir votre filliere</em>
                                        </MenuItem>
                                        <MenuItem value={2}>Science physique</MenuItem>
                                        <MenuItem value={3}>Science math</MenuItem>
                                        <MenuItem value={3}>Science math A</MenuItem>
                                        <MenuItem value={4}>Science math B</MenuItem>
                                        <MenuItem value={5}>Sciences Expérimentales</MenuItem>
                                        <MenuItem value={6}>Sciences économiques</MenuItem>
                                        <MenuItem value={7}>Sciences et technologies mécaniques</MenuItem>
                                        <MenuItem value={8}>Sciences et technologies électriques</MenuItem>
                                        <MenuItem value={9}>Sciences Gestion Comptable</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Classe</InputLabel>
                                    <Select
                                        name='classe'
                                        value={registerInput.classe}
                                        onChange={handleInput}
                                        >
                                        <MenuItem value=''>
                                            <em>choisir votre classe</em>
                                        </MenuItem>
                                        <MenuItem value={2}>Tronc commun</MenuItem>
                                        <MenuItem value={3}>1ère BAC </MenuItem>
                                        <MenuItem value={4}>2ème BAC</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <input type='password' name='password' value={registerInput.password} onChange={handleInput}placeholder='mot de passe' />
                        </div>
                        <div className='form-footer'>
                            <PrimaryButton text="S'inscrire" onClick={handleSubmit}  />
                            <div className='signup-text'>
                                <span>Vous avez deja un compte? <Link to='/login' className='link'>Se connecter</Link></span>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='img-container'>
                    <img src={vector} className="SideBackground" />
                    <img src={content} className="SideImage" />
                </div>

            </div>
        </div>
    )
}

export default Register