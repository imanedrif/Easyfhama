import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'

function Register(){

    const Navigate = useNavigate()
    const [registerInput,setRegister] = useState({
        nom: '',
        email: '',
        filliere: '',
        classe: '',
        password: '',
        error_list: [],
    })

    const handleInput = (e)=>{
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value})
    }

    const registerSubmit = (e)=>{
        e.preventDefault()

        const data ={
            nom: registerInput.nom,
            email: registerInput.email,
            filliere:registerInput.filliere,
            classe : registerInput.classe,
            passeword: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookies').then(response =>{
            axios.post('/api/register',data).then(res=>{
                if(res.data.statuts===200){
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.name);
                    swal("Success",res.data.message,"success");
                    Navigate('/etudiant/dashboard')
                }
                else{
                    setRegister({...registerInput,error_list:res.data.validation_errors})
                }
            })
        })
    }
    return(
        <div className='conatiner py-5'>
            <div className='row justify-content center'>
                <div className='col-md-6'>
                    <div className=''>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Register</h4>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={registerSubmit}>
                                    <div className='form-group mb-3'>
                                        <label>Nom</label>
                                        <input type='text' name='nom' value={registerInput.nom} onChange={handleInput}/>
                                        <span>{registerInput.error_list.name}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Email</label>
                                        <input email='text' name='email' value={registerInput.email} onChange={handleInput}/>
                                        <span>{registerInput.error_list.email}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Filliere</label>
                                        <select className='form-control' name='filliere' onChange={handleInput} value={registerInput.filliere}>
                                            <option value="">Choisir une filliere</option>
                                            <option value="science physique">science physique</option>
                                            <option value="science math">science math</option>
                                            <option value="science vie et terre">science vie et terre</option>
                                        </select>
                                    </div>
                                    <div className='from-group mb-3'>
                                        <label>Mot de passe</label>
                                        <input type='password' name='password' value={registerInput.password} onChange={handleInput}/>
                                        <span>{registerInput.error_list.password}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn bnt-primary'>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Register