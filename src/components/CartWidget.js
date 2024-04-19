import './CartWidget.css';
import { Link } from 'react-router-dom';
import carritoDeCompras from '../img/carritoColot.png'


const CartWidget = () => {
  return (
    <Link to={'/'} className='CartWidget'>
        <img alt='carrito' src={carritoDeCompras} className='CartImg'></img>
    </Link>
  )
}

export default CartWidget