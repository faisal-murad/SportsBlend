import React from 'react'
import './App.css'
import shirtBack from './assets/shirtBack.jpg'
import ProductList from './components/ProductList/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import soccerimage from './assets/soccer.jpg'
import ProductCustomize from './components/ProductCustomize/ProductCustomize'
// import Login from './components/auth/Login' 
import './components/Auth/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/Dashboard';
import Home from './components/User/Home';
import CategoryHome from './components/Admin/Categories/CategoryHome';
import Create from './components/Admin/Categories/CategoryCreate';
import CategoryUpdate from './components/Admin/Categories/CategoryUpdate';
import ProductHome from './components/Admin/Products/ProductHome';
import ProductUpdate from './components/Admin/Products/ProductUpdate';
import ProductCreate from './components/Admin/Products/ProductCreate';
import Cart from './components/Cart/Cart';
import Categories from './components/CategoryPage/Category';
import UserAcc from './components/UserAccount/UserAcc'
import OTP from './components/Auth/ForgetPassword/OTP.jsx'
import Changepass from './components/Auth/ForgetPassword/Changepass' 


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/productCustomize' element={<ProductCustomize sportTitle='FOOTBALL' cardImage={shirtBack} />} />
        <Route path='/productPage' element={<ProductList image={soccerimage} sportTitle='FOOTBALL' />} />



        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userAccount" element={<UserAcc />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/forgotpassword" element={<OTP />} />
        <Route path="/changepassword" element={<Changepass />} />


        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/categoryHome" element={<CategoryHome/>} />
        <Route path='/categoryCreate' element={<Create />} />
        <Route path='/categoryUpdate/:id' element={<CategoryUpdate />} />

        <Route path='productHome' element={<ProductHome />} />
        <Route path='productCreate' element={<ProductCreate />} />
        <Route path='productUpdate/:id' element={<ProductUpdate />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
