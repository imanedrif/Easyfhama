import React from 'react';
import './head.css'
import imghead from '../../assets/images/home-pic.svg'
import { PrimaryButton } from '../../layouts/Buttons';

function Head() {
    return (
        <div className='home-header'>
            <header className="header">
                <div className="title_head">
                    <p className="text1" style={{backgroundImage: "linear-gradient(259.25deg, #2D316B 28.85%, #B1E2DC 102.98%);"}}>Apprenez en ligne</p>
                    <p>avec des cours de qualité</p>
                </div>
                <div className='description_head'>
                    <p>
                        Notre site web offre une vaste sélection de cours en ligne pour vous aider à acquérir de nouvelles compétences et à améliorer votre carrière.
                         Nos cours accrédités sont conçus pour vous offrir une formation de qualité professionnelle avec des instructeurs experts 
                         qui vous guideront tout au long du processus d'apprentissage.
                    </p>
                </div>
                {localStorage.getItem("user")?(
                    ""
                ):
                <PrimaryButton text="Rejoignez gratuitement" path="/register" />
                }
            </header>
            <img className="img-head" src={imghead} alt="Header Image" />
        </div>

    )
}
export default Head;