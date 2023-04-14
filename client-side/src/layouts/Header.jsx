import React from 'react';
// import logo from './images/logo.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { DropdownsButton, PrimaryButton } from './Buttons';

const Header = () => {
  const links = [
    { name: 'home', path: '/' },
    { name: 'Packs', path: '/packs' },
    { name: 'Qui somme-nous?', path: '/about' },
  ];
  return (
    <div className="Header">
      {/* <img src="../../assets/images/logo.svg" /> */}
      <Link to="/"><img src={logo} /></Link>
      <div className="HeaderNav">
        {/* map links array , and check if the window path matches the links path */}
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={window.location.pathname === link.path ? 'active' : ''}
          >
            {link.name}
          </Link>
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