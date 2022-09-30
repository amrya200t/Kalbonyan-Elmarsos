import React, { useState } from "react";
import AllProjects from "./AllProject/AllProjects";
import Categories from "./Categories/Categories";

export default function ProjectsSection(props) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <div className="border-b border-gold brightness-50"></div>
      <section
        id="projects"
        className="container mx-auto px-0 md:px-2 py-20 md:py-24"
      >
        <h2 className="text-3xl font-bebas text-darkGold mb-8 px-4 sm:px-0">
          Latest Projects
        </h2>

        {/* CATEGORIES */}
        <Categories setCategory={setSelectedCategory} />

        {/* PROJECTS */}
        <AllProjects curCategory={selectedCategory} />
      </section>
    </>
  );
}
