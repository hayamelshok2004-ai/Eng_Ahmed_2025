import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Certifications.css"; // هنضيف تنسيق بسيط بعد الكود
import { X } from "lucide-react"; // أيقونة الإغلاق من مكتبة lucide-react

export default function Certifications() {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    "/certifications/c1.jpg",
    "/certifications/c2.jpg",
    "/certifications/c5.jpg",
    "/certifications/c3.jpg",
    "/certifications/c4.jpg",
    "/certifications/c6.jpg",
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 fw-bold">
        📜 شهادات وإنجازات المهندس أحمد عبده
      </h2>

      <div className="row justify-content-center">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="col-md-4 col-sm-6 mb-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <img
              src={img}
              alt={`شهادة ${index + 1}`}
              className="img-fluid rounded shadow cert-img"
              onClick={() => setSelectedImg(img)}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content">
            <button
              className="close-btn btn btn-light"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImg}
              alt="شهادة مكبرة"
              className="lightbox-image rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
