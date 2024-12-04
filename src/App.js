import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginPage/Login';
import Employees from "./Pages/Employees";
import Products from "./Pages/Products";
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="employees" element={<Employees />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
