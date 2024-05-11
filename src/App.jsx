import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webdev" element={<WebDev />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
