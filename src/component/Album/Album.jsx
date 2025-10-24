import React from "react";
import "./Album.css";

export default function Album() {
  // مصفوفة الصور — غيّري المسارات حسب صورك
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
  ];

  return (
    <div className="Album-container">
      <h2 className="Album-title">📸 ألبوم الصور</h2>
      <div className="Album-grid">
        {images.map((img, index) => (
          <div key={index} className="Album-item">
            <img src={img} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
