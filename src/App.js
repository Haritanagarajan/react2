import './App.css';
import Navbar from './components/Nav'
import { Routes, Route } from "react-router-dom";
import Acecraft from './components/Acecraft';
import College from './components/College';
import School from './components/School';
import Enterprice from './components/Enterprice';
import Notes from './components/Notes';
import Footer from './components/Footer';
import Arienmask from './components/Arienmask';
import Schoolproducts from './components/Schoolproducts';
import Sclproductdisplay from './components/Sclproductdisplay';
import Errorcomponent from './components/Errorcomponent';
import Register from './components/Register';
import Signin from './components/Signin';
import AddToCart from './components/Addtocart';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';


function App() {
  return (
    <div>
      <CartProvider>
      <Navbar />

      <Routes>
        <Route exact path='/Acecraft' element={<Acecraft />} />
        <Route exact path='School' element={<School />} />
        <Route exact path='College' element={<College />} />
        <Route exact path='Enterprice' element={<Enterprice />} />

        <Route exact path='Notes' element={<Notes />} />
        <Route exact path='Arienmask' element={<Arienmask />} />
        <Route exact path='Schoolproducts/:sclname' element={<Schoolproducts />} />
        <Route exact path='Sclproductdisplay/:id' element={<Sclproductdisplay />} />
        <Route exact path='*' element={<Errorcomponent />} />
        <Route exact path="Register" element={<Register />}></Route>
        <Route exact path="Signin" element={<Signin />}></Route>
        <Route exact path="cart" element={<Cart />} />
      </Routes>
      </CartProvider>
      <Footer />






    </div>
  );
}

export default App;
