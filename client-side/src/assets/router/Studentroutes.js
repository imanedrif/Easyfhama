import Home from '../../pages/landing-page/home';
// import Page403 from '../components/PageErrors/Page403';
// import Page404 from '../components/PageErrors/Page404';
import Register from '../../components/auth/register';
import Login from '../../components/auth/login';


const publicRoutes = [
{ path: '/', exact: true, name: 'Home', component: Home},
// { path: '/403', exact: true, name: 'Page403', component: Page403 },
// { path: '/404', exact: true, name: 'Page404', component: Page404 },
{ path: '/login', exact: true, name: 'Login', component: Login },
{ path: '/register', exact: true, name: 'Register', component: Register },
];

export default publicRoutes;