import './Navbar.css'
import { Link } from 'react-router-dom';
import sneakershop_transparent from '../img/sneakershop_transparent.png';
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <div className="navbar_container">
            <Link to="/" className='logo_container'>
                <img className='logo' src={sneakershop_transparent} alt="Logo" />
            </Link>
            <ul className='navbar'>
                <Link className='navlink' to="/">Home</Link>
                <Link className='navlink' to="/productos">Productos</Link>
                <Link className='navlink' to="/contacto">Contacto</Link>
                <Link className='navlink' to="/favoritos">Favoritos</Link>
            </ul>
            <CartWidget/>
        </div>
    );
}

export default Navbar;