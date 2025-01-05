import React from 'react';
import './Footer.css';
import instagramLogo from '../img/instagram.png';
import sneakershop_transparent from '../img/sneakershop_transparent.png';
import twitterLogo from '../img/logotipos.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/" className='logo_container'>
          <img className='logo' src={sneakershop_transparent} alt="Logo" />
      </Link>
      <p className="copyright">© 2024 NK-1997. Todos los derechos reservados.</p>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitterLogo} alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;