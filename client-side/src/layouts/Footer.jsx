import React from 'react'
import logo2 from '../assets/images/logo.svg'
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='logo2_text'>
          <img className='logo2' src={logo2} />
          <p className='text_footer'>| Classe virtuelle pour <br />| cours de soutien</p>
        </div>
        <p className='text2_footer'>Abonnez-vous à notre <br /> newsletter</p>
        <div className='input_button'>
          <input className='input_footer' type='text' placeholder='votre email' />
          <button className='button_footer'>S'abonner</button>
        </div>
        <p className='text3_footer'>Careers | Privacy Policy | Terms & Conditions</p>
        <p className='text4_footer'>©2023 Easy fahma. Tous droits reservés.</p>
      </div>
    </div>
  )
}

export default Footer