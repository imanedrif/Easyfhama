import React, { useEffect, useState } from 'react'
import Header from '../../layouts/Header'

const ProfDashboard = () => {

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
        <div>dashboard</div>
      </div>
    )
  }
}

export default ProfDashboard