import React from "react";
import {Routes, Route } from "react-router-dom";
import Product from "../components/Product";
import About from "../components/About";
import Home from "../components/Home"



const pagesData = [
    {
      path: "/",
      element: <Home />,
      id: 1,
    },
    
    {
      path: "/product",
      element: <Product />,
      id: 2,
    },
    {
      path: "/about",
      element: <About/>,
      id: 3,
    },
  ];
  

const Router = () => {
 
    return (
        <Routes>
          {pagesData.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
       
  )
}

export default Router