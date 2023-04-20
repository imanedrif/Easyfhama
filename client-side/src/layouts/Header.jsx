import React from 'react';
// import logo from './images/logo.svg';
import logo from '../assets/images/logo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { DropdownsButton, PrimaryButton } from './Buttons';

const Header = () => {
  const links = [
    // { name: 'home', path: '/' },
    { name: 'Packs', element: 'pack' },
    { name: 'Qui somme-nous?', element: 'about' },
  ];
  return (
    <div className="Header">
      {/* <img src="../../assets/images/logo.svg" /> */}
      <Link to="/"><img src={logo} /></Link>
      <div className="HeaderNav">
        {/* map links array , and check if the window path matches the links path */}
      <Link to="/" className='active'>Home</Link>
        {links.map((link, index) => (
          <ScrollLink
            key={index}
            to={link.element}
            smooth={true}
            duration={300}
            style={{ cursor: 'pointer' }}
            className={window.location.pathname === link.element ? 'active' : ''}
          >
            {link.name}
          </ScrollLink>
        ))}
        {localStorage.getItem("user") ? (
          <DropdownsButton name={
            JSON.parse(localStorage.getItem("user")).nom  
          } />
        ) :
        (
        <PrimaryButton text="Mon compte" path="/login" />
        )}
      </div>
    </div>
  )
}

export default Header