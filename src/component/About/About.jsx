import React from "react";

export default function About() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>السيرة الذاتية</h2>
      <a
        href="/resume.pdf"   // الملف موجود في public
        target="_blank"     // يفتح في نافذة جديدة
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        عرض / تحميل السيرة الذاتية
      </a>
    </div>
  );
}
