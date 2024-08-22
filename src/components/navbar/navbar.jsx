import React from 'react';
import kasaLogo from '../../assets/img/logo.webp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar__wrapper">
            <div className="navbar__wrapper__logo">
                <img src={kasaLogo} alt="Logo Kasa" />        
            </div>
            <div className='navbar__wrapper__items'>
                <NavLink to="/" className={({isActive, isPending}) => isPending ? "navbar__wrapper__items-link" : isActive ? "navbar__wrapper__items-link active" : "navbar__wrapper__items-link"}>
                    Accueil
                </NavLink>
            </div>
            <div className='navbar__wrapper__items'>
                <NavLink to="/about" className={({isActive, isPending}) => isPending ? "navbar__wrapper__items-link" : isActive ? "navbar__wrapper__items-link active" : "navbar__wrapper__items-link"}>
                    A Propos
                </NavLink>
            </div>
        </nav>
    );
  };

 export default Navbar;