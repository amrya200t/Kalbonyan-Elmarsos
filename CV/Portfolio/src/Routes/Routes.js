import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "../Pages/Homepage/Homepage";
import Blog from "../Pages/Blog";

import NotFound from "../Pages/NotFound";

export default function Links() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        {/* Finally, catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />;
      </Routes>
    </AnimatePresence>
  );
}
