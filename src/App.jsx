import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/home/Home";
import Album from "./component/Album/Album";  
import About from "./component/About/About";  
import Contact from "./component/Contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar />  {/* دايمًا فوق كل الصفحات */}

      <Routes>
        <Route path="/" element={<Home />} />            {/* الصفحة الرئيسية */}
        <Route path="/album" element={<Album />} />     {/* صفحة الألبوم */}
        <Route path="/about" element={<About />} />     {/* صفحة About */}
        <Route path="/contact" element={<Contact />} /> {/* صفحة Contact */}
      </Routes>
    </div>
  );
}
