import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  // رقمك بدون أي رموز أو + (ده الشكل الصحيح)
  const phoneNumber = "201223996079";

  return (
    <div className="Contact-container">
      <h2 className="Contact-title">تواصل معنا</h2>
      <div className="Contact-icons">
        {/* ✅ واتساب */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon whatsapp" />
        </a>

        {/* فيسبوك */}
        <a
          href="https://www.facebook.com/share/1GTTQCBPaj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook" />
        </a>

        {/* إنستجرام */}
        <a
          href="https://www.instagram.com/ahmadabdo558899?igsh=NG8zcWNheXM3dnFo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" />
        </a>

        {/* الإيميل */}
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="icon email" />
        </a>
      </div>
    </div>
  );
}
