import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Products from './Products';
import ProductDetail from './ProductDetail';
import Contact from './Contact';
import Brand from './Brand';
import BrandProducts from './BrandProducts';
import CartDetail from './CartDetail';


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
          <Route path="/cartdetail" element={<CartDetail />}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;