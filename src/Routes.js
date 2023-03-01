import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Lodgings from "./components/Pages/Lodgings/Lodgings";
import Err404 from "./components/Pages/Err404/Err404"

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lodgings/:id" element={<Lodgings />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Err404 />} />
        </Routes>
    )


}

export default index