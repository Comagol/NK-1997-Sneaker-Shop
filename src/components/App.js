import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Favorites from './Favorites';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/productos" element={<Products />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;