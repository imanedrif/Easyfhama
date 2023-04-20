import React, { useEffect, useState} from 'react'
import { PrimaryButton } from '../../layouts/Buttons'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Informations = () => {
  // const [formData, setFormData] = useState({
  //   nom: JSON.parse(localStorage.getItem("user")).nom,
  //   id: JSON.parse(localStorage.getItem("user")).id,
  //   email: JSON.parse(localStorage.getItem("user")).email,
  //   filliere: JSON.parse(localStorage.getItem("user")).filliere,
  //   classe: JSON.parse(localStorage.getItem("user")).classe,
  //   password: ''
  // });
  const [nom,setNom] = useState(JSON.parse(localStorage.getItem("user")).nom);
  const [id,setId] = useState(JSON.parse(localStorage.getItem("user")).id);
  const [email,setEmail] = useState(JSON.parse(localStorage.getItem("user")).email);
  const [filliere,setFilliere] = useState(JSON.parse(localStorage.getItem("user")).filliere);
  const [classe,setClasse] = useState(JSON.parse(localStorage.getItem("user")).classe);
  const [password , setPassword ] = useState("");

  let navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("updatedFormData")
    const updatedFormData = [];
    updatedFormData.push({
      'nom':nom,
      'email':email,
      'filliere' : filliere,
      'classe' : classe
    });
    if(password !== "" && password !== null && password !== undefined){
      updatedFormData[0].password=password;
    }
    console.log(updatedFormData[0])
    axios.patch(`http://localhost:8000/api/etudiants/${id}`,updatedFormData[0])
    .then(response=>{
      console.log(response.data["etudiant"].nom)
      if(response.status === 200){
        const user = JSON.parse(localStorage.getItem('user'));
        user.nom=response.data["etudiant"].nom;
        user.email=response.data["etudiant"].email;
        user.filliere=response.data["etudiant"].filliere;
        user.classe=response.data["etudiant"].classe;

        const updatedUser = JSON.stringify(user);
        localStorage.setItem('user', updatedUser);

        // localStorage.getItem("user").nom = response.data["etudiant"].nom
        // localStorage.getItem("user").email = response.data["etudiant"].email
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Save',
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')
            window.location.href="/etudiant/dashboard"
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
      }
    })
    .catch(err=>{
      // if(err.response && err.response.status ===401){
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Oops...',
      //     text: 'Something is wrong!',
      // }
      console.log(err)
    })
    console.log(localStorage.getItem("user"))
  }

  return (
      <div>
        <div className="justify_information">
          <label className="mes_info">Mes informations</label><br />
          <input className="input_info" type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/> <br />
          <input className="input_info" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
          <input className="input_info" type="text" value={filliere} onChange={(e)=>setFilliere(e.target.value)}/>
          <input className="input_info" type="text" value={classe} onChange={(e)=>setClasse(e.target.value)}/>
          <input className="input_info" type="password" placeholder="*********"  onChange={(e)=>setPassword(e.target.value)}/><br />
          <PrimaryButton text="Enregistrer" onClick={(e)=>{handleSubmit(e)}}/>
        </div>
      </div>
   )
  }
export default Informations