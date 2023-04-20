import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../layouts/Header'
import { Link } from 'react-router-dom'
import userpic from '../../assets/images/userpic.svg'
import '../../assets/css/etudiant/dashboard.css'
import Statistic from './statistic'
import Abonnements from '../etudiant/Abonnements'
import Informations from '../etudiant/Informations'

const ProfDashboard = () => {
  const [btn,setBtn] = useState();
   
  const handleclick = (option)=>{
    setBtn(option)
    if(option === "sedeconnecter"){
      localStorage.removeItem("user")
      window.location.href = '/'
    }
  }
  let nom = JSON.parse(localStorage.getItem("user")).nom 

  const [isProf, setIsprof] = useState(false)

  useEffect(() => {
    let user = localStorage.getItem("user")
    if (user) {
      if (JSON.parse(user).role === 'prof') {
        setIsprof(true)
      }
      else {
        window.location.href = "/"
      }
    }
    else {
      window.location.href = "/login"
    }
  }, [])

  if (isProf) {
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

export default ProfDashboard