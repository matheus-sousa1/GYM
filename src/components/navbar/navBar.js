import React from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Routes, RouterProvider, Outlet, Route, Link } from 'react-router-dom';
import Home from './home';
import Contact from './contact';


const NavBar = () => {

const router = createBrowserRouter(
  createRoutesFromElements( 
    <Routes path="/" element={<Root />}>
      <Route index element={<Home/>} >
      <Route path="/contact" element={<Contact/>} ></Route>
      </Route>
    </Routes>
  ))

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )

}

const Root = () => {
  return <>
   <div>
    <Link to="/">home</Link>
    <Link to="/contact" >contact</Link>
    
   </div>

   <div>
    <Outlet/>
   </div>
  </>
}

export default NavBar;