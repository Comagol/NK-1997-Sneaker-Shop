import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Products from './Products';
import ProductDetail from './ProductDetail';
import Brand from './Brand';
import BrandProducts from './BrandProducts';
import CartDetail from './CartDetail';
import Footer from './Footer';
import ContactForm from './ContactForm';
import CheckoutForm from './CheckoutForm';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter> 
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Brand />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:brand" element={<BrandProducts />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/cartdetail" element={<CartDetail />} />
            <Route path="/contactform" element={<ContactForm />} />
            <Route path="/checkoutform" element={<CheckoutForm/>}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
