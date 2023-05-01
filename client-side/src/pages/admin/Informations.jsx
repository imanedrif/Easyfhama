import React, { useEffect, useState} from 'react'
import { PrimaryButton } from '../../layouts/Buttons'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Informations = () => {
  const [formData, setFormData] = useState({
    nom: JSON.parse(localStorage.getItem("user")).nom,
    id: JSON.parse(localStorage.getItem("user")).id,
    email: JSON.parse(localStorage.getItem("user")).email,
    password: ''
  });

  let navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("updatedFormData")
    const updatedFormData = new FormData();
    updatedFormData.append('nom', formData.nom);
    updatedFormData.append('email', formData.email);
    updatedFormData.append('password', formData.password);

    axios.put(`http://localhost:8000/api/etudiants/${formData.id}`,updatedFormData)
    .then(response=>{
      if(response.status === 200){
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
    })
    .catch(err=>{
      if(err.response && err.response.status ===401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something is wrong!',
      })  
      }
    })
  }

  return (
      <div>
        <div className="justify_information">
          <label className="mes_info">Mes informations</label><br />
          <input className="input_info" type="text" value={formData.nom} onChange={handleInputChange}/> <br />
          <input className="input_info" type="text" value={formData.email} onChange={handleInputChange}/><br />
          <input className="input_info" type="password" placeholder="*********"  onChange={handleInputChange}/><br />
          <PrimaryButton text="Enregistrer" onClick={(e)=>{handleSubmit(e)}}/>
        </div>
      </div>
   )
  }
export default Informations