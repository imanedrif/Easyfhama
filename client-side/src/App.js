import React from 'react';
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


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
      path: '/Register',
      component: Register
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