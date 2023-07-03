import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
import Nav from './Components/Nav';
import Product from './Components/Product';
import SingleProduct from './Components/SingleProduct';
import Cart from './Components/Cart';
// import Footer from './Components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route path='/Product' element={<Product />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
