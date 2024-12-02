import React from "react";
import Login from './LoginPage/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<Sidebar />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;