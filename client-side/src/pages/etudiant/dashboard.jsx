import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../layouts/Header'

const EtudiantDashboard = () => {
    
  const [isEtudiant,setIsetudiant]=useState(false)

    useEffect(() => {
        var user = localStorage.getItem("user")
        if(user){
            if(JSON.parse(user).role === "etudiant"){
                setIsetudiant(true)
            }else{
                window.location.href = "/"
            }
        }
        else{
            window.location.href = "/login"
        }
    }, [])
    if(isEtudiant){
  return (
    <div>
      <Header/>
      Etudiant dashboard
    </div>
  )}
}

export default EtudiantDashboard