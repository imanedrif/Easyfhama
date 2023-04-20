import React from 'react'
import Header from '../layouts/Header'
import Head from '../components/head/Head';
import Appretissage from '../components/apprentissage/Apprentissage';
import Cours from '../components/cours/Cours';
import Packs from '../components/packs/Packs';
import Nous from '../components/aboutus/Nous';
import Comment from '../components/feedbacks/Comment';
import Footer from '../layouts/Footer';
function Home() {
    return (
    <div>
        <Header />
        <Head/>
        <Appretissage/>
        <Cours/>
        <Packs/>
        <Nous/>
        <Comment/>
        <Footer/>
    </div>
    )
}
    
    
export default Home;