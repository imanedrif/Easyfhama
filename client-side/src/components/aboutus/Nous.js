import React from 'react';
import './nous.css';
import Quinous from '../../assets/videos/Quinous.mp4';

function Nous() {
    return (
        <div id='about'>
            <hr /><p className='feedback_text'>Feedbacks</p>
            <p className='title_feedback'>Ce que nos élèves disent</p>
            <p className='text1_nous'>
                Easy Fhama a reçu plus de 100 000 évaluations positives de la part <br />
                de nos utilisateurs à travers le Maroc.
            </p>
            <p className='text2_nous'>
                Certains élèves et enseignants ont été grandement  <br />
                aidés par la stratégie.
            </p>
            <p className='text3_nous'>
                Êtes-vous aussi? Merci de donner votre appréciation
            </p>
            <button className='button_nous'>Rédigez votre évaluation</button>
            <video controls>
                <source src={Quinous} type="video/mp4" />
            </video>
        </div>
    )
}
export default Nous;