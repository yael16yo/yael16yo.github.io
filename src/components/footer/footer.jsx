import React from 'react';
import KasaLogo from '../../assets/img/logo-white.webp';

const FooterContact = () => {
    return (
        <footer className='footer__wrapper'> 
            <div className="footer__wrapper__logo">
                <img src={KasaLogo} alt="Logo Kasa Blanc" />
            </div>
            <div className='footer__wrapper__items'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
  }

export default FooterContact;