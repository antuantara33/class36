import React from 'react'

import Home from "./pages/Home"
import AboutPage from './pages/AboutPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout';


let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Layout/>}>

    <Route path="/"element={<Home/>}></Route>
    <Route path="/about"element={<AboutPage/>}></Route>
  </Route>
))



const App = () => {
  return (
    <>
    <RouterProvider router={router}/>

 
    </>
   
  );
};

export default App;