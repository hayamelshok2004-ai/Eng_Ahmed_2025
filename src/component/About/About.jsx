import React from "react";
import "./About.css"; // نربط ملف التنسيق

export default function About() {
  return (
    <div className="about-container">
      <h2>السيرة الذاتية</h2>
      <a
        href="/resume.pdf"   // الملف في مجلد public
        target="_blank"
        rel="noopener noreferrer"
        className="cv-btn"
      >
        عرض / تحميل السيرة الذاتية
      </a>
    </div>
  );
}
