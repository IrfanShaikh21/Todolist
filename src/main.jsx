import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/LoginSignup/Login.jsx'
import Card from './Components/Card/Card.jsx'
import Product from './Components/Product/Product.jsx'
import ContextApi from './ContextApi/ContextApi.jsx'
import Men from './Components/Men/Men.jsx'
import Women from './Components/Women/Women.jsx'
import Kid from './Components/Kid/Kid.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <ContextApi>
          <App />
        </ContextApi>
      }
    >
      <Route path="/" element={<Home />}></Route>
      <Route path="/men" element={<Men />}></Route>
      <Route path="/women" element={<Women />}></Route>
      <Route path="/kid" element={<Kid />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/card" element={<Card />}></Route>
      <Route path="/product/:productID" element={<Product />} />
    </Route>
  )
);





createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
