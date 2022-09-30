import React from "react";
import Skills from "./Skills/Skills";
import AboutMe from "./About me/AboutMe";
import Certifications from "./Certifications/Certifications";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto px-0 md:px-2 py-20 md:py-24"
    >
      <h2 className="text-3xl font-bebas text-darkGold mb-8 px-4 sm:px-0">
        About Me
      </h2>

      {/* About me Summary */}
      {<AboutMe />}

      {/* Skills Section */}
      {<Skills />}

      {/* Certifications Section */}
      {<Certifications />}
    </section>
  );
}
