import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../layouts/Header'
import { Link } from 'react-router-dom'
import userpic from '../../assets/images/userpic.svg'
import '../../assets/css/etudiant/dashboard.css'
import Statistic from './statistic'
import Abonnements from './Abonnements'
import Informations from './Informations'

const EtudiantDashboard = () => {

  const [isEtudiant, setIsetudiant] = useState(false)
  const [btn,setBtn] = useState();
   
  const handleclick = (option)=>{
    setBtn(option)
    if(option === "sedeconnecter"){
      localStorage.removeItem("user")
      window.location.href = '/'
    }
  }
  let nom = JSON.parse(localStorage.getItem("user")).nom 

  useEffect(() => {
    var user = localStorage.getItem("user")
    if (user) {
      if (JSON.parse(user).role === "etudiant") {
        setIsetudiant(true)
      } else {
        window.location.href = "/"
      }
    }
    else {
      window.location.href = "/login"
    }
  }, [])
  if (isEtudiant) {
    return (
      <div>
        <Header />
        <div className='dashboard'>
          <div className="justify_routes">
            <div className='dashboard_route'>
              <div className='dashboard-head'>
                <img className='cour_img' src={userpic} />
                <p className='text_dash'>Science physique</p>
                <p className='niveau'>1er bac</p>
              </div>
              <div>
                <ul className="list_route">
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('statistic')}>Statistic</button></li>
                  <li className="list_item"><button className="button_route" onClick={()=>handleclick('abonnement')}>Abonnements</button></li>
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
            {btn === "abonnement" && (
              <Abonnements/>
            )}
            {btn === "informations" &&(
              <Informations/>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EtudiantDashboard