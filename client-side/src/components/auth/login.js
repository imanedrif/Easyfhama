import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

function Login(){

    const Navigate = useNavigate();
    const [loginInput,setLogin] = useState({
        email: '',
        password: '',
        error_list:[],
    });

    const handleInput = (e)=>{
        e.persist();
        setLogin({...loginInput,[e.target.name]: e.target.value});
    }
    const loginSubmit = (e)=>{
        e.preventdefault();

        const data = {
            email: loginInput.email,
            password : loginInput.password,
        }
    }

    // axios.get('/sanctum/csrf-cookies').then(response=>{
    //     axios.post(`api/login`,data).then(res=>{
    //         if(res.data.statuts === 200){
    //             localStorage.setItem('auth_token',res.data.token);
    //             localStorage.setItem('auth_name',res.data.name);
    //             swal("Success",res.data.message,"success");
    //             if(res.data.role === 'admin'){
    //                 Navigate('/admin/dashboard');
    //             }
    //             else if(res.data.role === 'etudiant'){
    //                 Navigate('/etudiant/dashboard')
    //             }
    //             else if (res.data.role === 'prof'){
    //                 Navigate('/prof/dashboard')
    //             }
    //             else if (res.daya.statuts === 401){
    //                 swal("Warning" , res.data.message,"warning");
    //             }
    //             else{
    //                 setLogin({...loginInput, error_list : res.data.validation_errors});
    //             }
    //         }
    //     })
    // })
    return (
        <div>
            <div className='container py-5'>
                <div className='row-justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <h4>Login</h4>
                            </div>  
                            <div className='card-body'>
                                <form onSubmit={loginSubmit}>
                                    <div className='form-group mb-3'>
                                        <label>Email</label>
                                        <input type='email' name='email' onChange={handleInput} value={loginInput.email} className='from-control'/>
                                        <span>{loginInput.error_list.email}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Password</label>
                                        <input type='password' name='password' onChange={handleInput} value={loginInput.password} className='form-control'/>
                                        <span>{loginInput.error_list.password}</span>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type='submit' className='btn btn-primary'>Login</button>
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

export default Login