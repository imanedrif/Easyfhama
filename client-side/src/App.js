import React from 'react';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AdminDashboard from './pages/admin/dashboard.jsx';
import EtudiantDashboard from './pages/etudiant/dashboard.jsx';
import ProfDashboard from './pages/prof/dashboard.jsx';


function App() {
  const pages = [
    // in case you've added a page , u just need to overwrite this array
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name:'Admin Dashboard',
      path:'/admin/dashboard',
      component:AdminDashboard
    },
    {
      name:'Etudiant Dashboard',
      path:'/Etudiant/dashboard',
      component:EtudiantDashboard
    },
    {
      name:'Prof Dashboard',
      path:'/Prof/dashboard',
      component:ProfDashboard
    }
  ];


  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map((page, index) => {
            return (
              <Route key={index} path={page.path} element={<page.component />} />
            )
          }
          )
        }
      </Routes>
    </BrowserRouter>
  );
}


export default App;