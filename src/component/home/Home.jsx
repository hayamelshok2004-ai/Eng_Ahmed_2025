import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="text-center mt-5 pt-5"
      style={{
        marginTop: "100px",
        backgroundImage: `url('/21.jpeg')`, // شعار نادي سموحة
        backgroundSize: "300px", // حجم الشعار
        backgroundPosition: "center top 50px", // موقعه في الصفحة
        backgroundRepeat: "no-repeat",
        backgroundColor: "#e0f7ff", // خلفية سماوية ناعمة
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* طبقة شفافية خفيفة على الخلفية */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          zIndex: 0,
        }}
      ></div>

      {/* صورة البروفايل المتحركة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: [0, 10, -10, 0] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          backgroundColor: "#fff",
          border: "5px solid #007bff",
          padding: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
          display: "inline-block",
          position: "relative",
          zIndex: 1,
        }}
      >
        <img
          src="/1.jpg"
          alt="profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "50%",
          }}
        />
      </motion.div>

      {/* الاسم */}
      <motion.h2
        className="mt-4 fw-bold text-primary"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 1 }}
      >
        المهندس / احمد عبده
      </motion.h2>

      {/* العنوان المتحرك */}
      <motion.h1
        className="text-secondary fs-4"
        animate={{
          x: [0, 20, -20, 0],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{ marginTop: "20px", position: "relative", zIndex: 1 }}
      >
        نائب لرئيس مجلس إدارة نادي سموحة
      </motion.h1>
    </div>
  );
}
