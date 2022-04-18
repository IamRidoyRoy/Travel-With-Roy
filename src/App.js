import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>

      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
