import React from 'react';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom';
// import MasterLayout from './layouts/admin/MasterLayout';
import Register from './components/auth/register';
import Login from './components/auth/login';
// import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './assets/router/publicroute';


import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


axios.defaults.withCredentials = true;


axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {


  return (
    <div className="App">
        <Router>
     
          <Routes>


            {/* <AdminPrivateRoute path="/admin" name="Admin" /> */}
           
            <Route path="/" name="Home" />
           
             <Route path="/login">
              {localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Login />}
            </Route>


            <Route path="/register">
              {localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Register />}
            </Route>


            {/* <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} /> */}


          </Routes>
        </Router>
    </div>
  );
}


export default App;