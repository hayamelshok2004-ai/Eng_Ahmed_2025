import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="text-center mt-5 pt-5"
      style={{
        marginTop: "100px",
        backgroundColor: "#e0f7ff",
        minHeight: "100vh",
      }}
    >
      {/* صورة البروفايل المتحركة */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, x: -100 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: [0, 20, -20, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
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
      >
        المهندس / احمد عبده
      </motion.h2>

      {/* العنوان */}
      <motion.p
        className="text-secondary fs-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        نائب لرئيس مجلس ادارة نادى سموحه
      </motion.p>
    </div>
  );
}
