import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../layouts/Header'
import { Link } from 'react-router-dom'
import userpic from '../../assets/images/userpic.svg'
import '../../assets/css/etudiant/dashboard.css'
import Statistic from './statistic'
import Informations from './Informations'
import GestionEtudiants from './gestionEtudiants'
import GestionCours from './gestionCours'
import GestionProf from './gestionProf'


const AdminDashboard = () => {
  const [btn,setBtn] = useState();
  const [isAdmin,setIsadmin]=useState(false)
  let nom = JSON.parse(localStorage.getItem("user")).nom 

  const handleclick = (option)=>{
    setBtn(option)
    if(option === "sedeconnecter"){
      localStorage.removeItem("user")
      window.location.href = '/'
    }
  }

  useEffect(() => {
    var user = localStorage.getItem("user")
    if (user) {
      if (JSON.parse(user).role === "admin") {
        setIsadmin(true)
      } else {
        window.location.href = "/"
      }
    }
    else {
      window.location.href = "/login"
    }
  }, [])

  if(isAdmin){
  return (
    <div>
      <Header/>   
      <div className='dashboard'>
          <div className="justify_routes">
            <div className='dashboard_route'>
              <div className='dashboard-head'>
                <img className='cour_img' src={userpic} />
                <p className='text_dash'>Admin</p>
              </div>
              <div>
                <ul className="list_route">
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('statistic')}>Statistic</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('G-etudiant')}>Gestion des etudiants</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('G-cours')}>Gestion des cours</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('G-cours')}>Gestion des profs</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('informations')}>Informations personnelles</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('sedeconnecter')}>Se deconnecter</button></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='dashbord-content'>
               <div className="name">
                  <div className='header-dashname'>
                    <p className="hello_name">{nom}</p><p className="icon_name">👋</p>
                  </div>
                  <p className="welcome">Bienvenue sur ton tableau de bord</p>
                </div>
            {btn === "statistic" &&(
            <Statistic/>
            )}
            {btn === "G-etudiant" && (
              <GestionEtudiants/>
            )}
            {btn === "G-cours" && (
              <GestionCours/>
            )}
            {btn === "G-prof" && (
              <GestionProf/>
            )}
            {btn === "informations" &&(
              <Informations/>
            )}
          </div>
        </div>
    </div>
  )}
}

export default AdminDashboard