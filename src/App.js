import Header from './components/Header/header';
import Footer from './components/Footer/footer';
// import Categories from './components/Categories/category';
import Categories from './components/Categories/catogorise';
// import ShoppingCart from './components/cart/shoppingCart'
import ProductDetails from './components/ProductDetails/productDetails'
import Products from './components/Products/products'
import {
	BrowserRouter,
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
        <Route  path='/' element={<Categories />} />
        {/* <Route  path='/cart' element={<ShoppingCart />} /> */}
        <Route  path='/ProductDetails/:id' element={<ProductDetails />} />
      </Routes>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
