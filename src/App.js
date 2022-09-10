import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// import Categories from './components/Categories/category';
import Categories from './components/Categories/catogorise';
import Cart from './components/cart/cart'
import Products from './components/Products/products'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div class="App">
      <Header />
      
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
  
      <Products />
      <Footer />
    </div>
  );
}

export default App;
