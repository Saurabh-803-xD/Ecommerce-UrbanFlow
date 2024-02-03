import './App.css';
import Navbar from './components/Navbar/Navbar';
import ShopCategory from './pages/ShopCategory';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/Footer/Footer';
import menBanner from './components/Assets/banner_mens.png'
import womensBanner from './components/Assets/banner_women.png'
import kidsBanner from './components/Assets/banner_kids.png'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
   <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={menBanner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womensBanner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path = ':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    <Toaster/>
   </div>
  );
}

export default App;
