import React from "react";
import { motion } from "framer-motion";
import "./Album.css";

export default function Album() {
  const images = [
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
    "./10.jpg",
    "./11.jpg",
    "./12.jpg",
    "./13.jpg",
    "./14.jpg",
    "./15.jpg",
    "./16.jpg",
    "./17.jpg",
    "./18.jpg",
    "./19.jpg",
    "./20.jpg",
    "./21.jpg",
    "./22.jpg",
    "./23.jpg",
    "./N24.jpg",
    "./25.jpg",
    "./26.jpg",
  ];

  return (
    <div className="Album-container">
      <h2 className="Album-title">📸 ألبوم الصور</h2>
      <div className="Album-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="Album-item"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <motion.img
              src={img}
              alt={`Gallery ${index}`}
              className="album-img"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
