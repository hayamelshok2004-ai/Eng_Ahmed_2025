import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Home from "./component/home/Home";
import Album from "./component/Album/Album";
import Videos from "./component/videos/Videos";
import Certifications from "./component/Certifications/Certifications";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album" element={<Album />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/certifications" element={<Certifications />} /> {/* ✅ هنا */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
