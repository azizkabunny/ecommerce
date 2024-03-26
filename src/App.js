import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import Shop from './pages/Shop'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'
import Account from './pages/user/Account'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import PasswordReset from './pages/auth/PasswordReset'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/user/Wishlist'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='container mx-auto px-5'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/shop' element={<Shop />}  />
        <Route path='/products/:id' element={<ProductDetails />}  />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />

        <Route path='user'>
          <Route path='account' element={<Account />} />
          <Route path='wishlist' element={<Wishlist />} />
        </Route>

        <Route path='auth'>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='password-reset' element={<PasswordReset />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
