import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Product from './pages/Product'
import thumbnailImg from './assets/thumbnail.jpg'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Checkout from './pages/Checkout'


function Layout() {
  return (
    <>
      <Header title='WEBBROAD' />
      <Outlet />
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Product
          title='Complete Web Development Bundle'
          discription='Learn to build website with HTML , CSS,JavaScript,React,Node,and Mongo'
          images={[{ src: thumbnailImg, alt: 'ThunmnailImg' }]} price={29.99} />
        } />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<div>Success</div>} />
      </Route>
    </Routes>
  )
}

export default App
