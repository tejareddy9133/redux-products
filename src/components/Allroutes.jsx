import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Homepage from "../pages/Homepage";
import Singleproduct from "./Singleproduct";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Singleproduct />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default Allroutes;
