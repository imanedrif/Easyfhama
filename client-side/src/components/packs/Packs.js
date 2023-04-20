import React, { useEffect, useState } from 'react';
import './packs.css';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Packs() {
    
    let navigate = useNavigate()
    var user = localStorage.getItem("user")
    const [packinfo,setPackinfo]=useState('')
    
    const handleCoursButtonClick = ()=>{
        if(user){
            navigate('/cours')
        }
        else{
            navigate('/login')
        }
    }
    
    const handlepaymentClick = (e)=>{
        setPackinfo(e.target.value)    
        if(user){  
            navigate('/payment')
        }
        else{
            navigate('/login')
        }
    }

    return (
        <Element name="pack"> 
        <div id='pack'>
            <p className='packs'>Packs</p>
            <div className='cases'>
                <div className='casepack1'>

                    <p className='text1case'>Test</p>
                    <p className='text2case1'>Free</p>
                    <ul className='packs_list'>
                        <li className='pack_item'><img className='iconpack' src={icon1} />Accès à des cours de soutien</li>
                        <li className='pack_item'><img className='iconpack' src={icon1} />Telechargement des resume</li>
                        <li className='pack_item'><img className='iconpack' src={icon1} />Aucun engagement financier requis</li>
                    </ul>
                    <button className='button1_pack' value = "Free" onClick={handleCoursButtonClick}>Essayer gratuitement</button>

                </div>
                <div className='casepack2'>

                    <p className='text1case'>👤 Individuel </p>
                    <div className='best'>
                    <p className='text2case2'>best</p>
                    </div>
                    <p className='text2case1'>250dh</p>
                    <ul className='packs_list'>
                        <li className='pack_item'><img className='iconpack' src={icon2} />Discussion prive</li>
                        <li className='pack_item'><img className='iconpack' src={icon2} />Accès 24/7 aux cours en ligne</li>
                        <li className='pack_item'><img className='iconpack' src={icon2} />Accès a les commentaire et mic</li>
                        <li className='pack_item'><img className='iconpack' src={icon2} />Telechargement des resume</li>
                        <li className='pack_item'><img className='iconpack' src={icon2} />Horaires flexibles et accès illimité</li>
                    </ul>
                    <button className='button2_pack' value="individuel" onClick={handlepaymentClick}>Licence régulière</button>

                </div>
                <div className='casepack3'>

                    <p className='text1case'>👥 Collaboratif </p>
                    <p className='text2case1'>150dh</p>
                    <ul className='packs_list'>
                        <li className='pack_item'><img className='iconpack' src={icon3} />Personnaliser votre plan</li>
                        <li className='pack_item'><img className='iconpack' src={icon3} />Horaires flexibles et accès illimité</li>
                        <li className='pack_item'><img className='iconpack' src={icon3} />Accès 24/7 aux cours en ligne</li>
                        <li className='pack_item'><img className='iconpack' src={icon3} />Telechargement des resume</li>
                    </ul>
                    <button className='button1_pack' value="Collaboratif" onClick={handlepaymentClick}>Licence étendue</button>

                </div>
            </div>
        </div>
    </Element>
    )
}
export default Packs;