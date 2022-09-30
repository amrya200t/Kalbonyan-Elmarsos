import React from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      className="text-center font-bold text-3xl text-light flex items-center justify-center h-screen"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h3>Sorry, page not found!</h3>
    </motion.div>
  );
}
