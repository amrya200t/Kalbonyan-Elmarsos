import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { LayoutGroup } from "framer-motion";
// import { Reorder } from "framer-motion";

import Project from "./project/Project";
import PROJECTS_DATA from "./PROJECTS_DATA";

export default function AllProjects(props) {
  const [selectedCategory, setSelectedCategory] = useState(PROJECTS_DATA);

  useEffect(() => {
    if (props.curCategory === "all") {
      setSelectedCategory(PROJECTS_DATA);
    } else {
      const selectedProjects = PROJECTS_DATA.filter((cat) =>
        cat.tags.map((tag) => tag.toLowerCase()).includes(props.curCategory)
      );
      setSelectedCategory(selectedProjects);
    }
  }, [props.curCategory]);

  return (
    <motion.section
      className="ease-in transition-all duration-300 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center justify-items-center text-light p-4 lg:p-0"
      // layout
    >
      {selectedCategory.map((project, i) => (
        <Project
          key={`${i}-${project.name}`}
          name={project.name}
          description={project.description}
          tags={project.tags}
          liveUrl={project.liveUrl}
          sourceCode={project.sourceCode}
          image={project.image}
          alt={project.alt}
          date={project.date}
          technologies={project.technologies}
        />
      ))}
    </motion.section>
  );
}
