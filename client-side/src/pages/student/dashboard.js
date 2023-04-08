import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import StudentDashboard from '../../components/dashboard/StudentDashboard'

function Dashboard (){
  return (
    <div>
        <Navbar/>
        <StudentDashboard/>
    </div>
  )
}

export default Dashboard