import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Products from './Products';
import ProductDetail from './ProductDetail';
import Contact from './Contact';
import Cart from './Cart';
import Brand from './Brand';
import BrandProducts from './BrandProducts';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Brand />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/productos/:brand" element={<BrandProducts />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;