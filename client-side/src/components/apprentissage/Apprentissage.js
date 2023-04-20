import React from 'react';
import './appretissage.css';
import iconcase1 from '../../assets/images/icon1.svg';
import iconcase2 from '../../assets/images/icon2.svg';
import iconcase3 from '../../assets/images/icon3.svg';

function Appretissage() {
    return (
        <div className='apprentisage-section'> 
            <div className='appretissage'>
                <p className='textA1'>Pourquoi l’apprentissage </p>
                <p className='textA2'>en ligne </p>
            </div>
            <div className='description-apprentissage'>
                <p>L'apprentissage en ligne offre une flexibilité sans pareil et vous permet d'accéder à une variété de cours et de programmes provenant du monde entier, le tout à un coût souvent plus abordable que les programmes d'études traditionnels.</p>
            </div>
            <div className='pourquoi_appretissage'>
                <div className='case1'>
                    <img className='icons_cases' src={iconcase1} />
                    <p className='titile_cases'>Gérer votre propre <br /> emploi du temps</p>
                    <p className='text_cases'>
                        ravailler à votre propre rythme et <br />
                        d'accéder à une variété de cours<br />
                        et de programmes
                    </p>
                </div>
                <div className='case2'>
                    <img className='icons_cases' src={iconcase2} />
                    <p className='titile_cases'>Expérience d’apprentissage <br /> complète accessible 24/24 </p>
                    <p className='text_cases'>
                        Vidéos, fiches de cours, exercices, quiz, <br />
                        annales… Le tout accessible 24/24, 7j/7,<br />
                        pour apprendre en toute liberté​ sur PC<br />
                        ou sur notre application mobile.
                    </p>
                </div>
                <div className='case3'>
                    <img className='icons_cases' src={iconcase3} />
                    <p className='titile_cases'>Accéder à des enseignants <br /> et à des experts</p>
                    <p className='text_cases'>
                        Plus besoin d'apprendre par cœur... Tu
                        vas comprendre tes cours en toute
                        facilité grâce à la pédagogie ludique
                        et efficace de nos professeurs.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Appretissage;