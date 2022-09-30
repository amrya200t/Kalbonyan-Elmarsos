import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./Hero/HeroSection";
import AboutSection from "./About/AboutSection";
import ProjectsSection from "./Projects/ProjectsSection";
import HireMeSection from "./HireMe/HireMeSection";

export default function Homepage() {
  return (
    <motion.main
      className="bg-noisyBG"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: -window.innerWidth, transition: { duration: 0.1 } }}
    >
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* Hire ME SECTION */}
      <HireMeSection />
    </motion.main>
  );
}
