import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
