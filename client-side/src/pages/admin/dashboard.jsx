import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../layouts/Header'

const AdminDashboard = () => {
    
  const [isAdmin,setIsadmin]=useState(false)

    useEffect(() => {
        var user = localStorage.getItem("user")
        if(user){
            if(JSON.parse(user).role === "admin"){
                setIsadmin(true)
            }else{
                window.location.href = "/"
            }
        }
        else{
            window.location.href = "/login"
        }
    }, [])
    if(isAdmin){
  return (
    <div>
      <Header/>
    </div>
  )}
}

export default AdminDashboard