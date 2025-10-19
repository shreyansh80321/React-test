import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductListPage from './pages/productList'
import ProductDetailsPage from './pages/productDetails'
import CartListPage from './pages/cartList'

function App() {
  return(
  <>
    <Routes>
      <Route path="/product-list" element={<ProductListPage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/cart" element={<CartListPage />} />
    </Routes>
  </>
  )
}

export default App
