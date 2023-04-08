import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import '../assets/css/style.css';

import Dashboard from '../components/dashboard/StudentDashboard';

import Publicroutes from '../assets/router/Studentroutes';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';

const StudentLayouts = () => {

return (
    <div>

    <Navbar />

    <div>
    <Routes>
    <Route path="/dashboard" component = {Dashboard} />

    {Publicroutes.map((routedata, idx) => {
    return (
    routedata.component && (
    <Route
    key={idx}
    path={routedata.path}
    exact={routedata.exact}
    name={routedata.name}
    render={(props) => (
    <routedata.component {...props} />
    )}
    />
    )
    )
    })}
    </Routes>
    </div>

    </div>
);

}

export default StudentLayouts;