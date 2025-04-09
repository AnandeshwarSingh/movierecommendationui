import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Language from "../pages/Language";
// import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/language" element={< AddMovieForm/>} />
            <Route path="/about" element={<MovieList/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    );
};

export default AppRoutes;