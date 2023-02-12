import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/Pages/About";
import Lodgings from "./components/Pages/Lodgings";
import Err404 from "./components/Pages/Err404/Err404";
import Footer from "./Layout/Header/Header";
import Header from "./Layout/Footer/Footer";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logements" element={<Lodgings />} />
        <Route path="/apropos" element={<About />} />

        <Route path="*" element={<Err404 />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
