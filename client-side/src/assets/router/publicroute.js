import React from 'react';
import {Route, Router, Routes} from 'react-router-dom';
import StudentLayouts from '../../layouts/studentLayouts';

function PublicRoute({...rest})
{
return (

<Route {...rest} render={ (props) => <StudentLayouts {...props} /> } />

    
)
}

export default PublicRoute;