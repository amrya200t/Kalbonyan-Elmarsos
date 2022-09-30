import React from "react";
import { motion } from "framer-motion";

import Link from "./Link";
import ProjectInfo from "./ProjectInfo";

export default function Project(props) {
  return (
    <motion.article
      // layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      exit={{ opacity: 0 }}
      tabIndex="0"
      className="group ease-in transition-all duration-300 drop-shadow-[0_4px_2px_rgba(251,157,38,0.10)] hover:drop-shadow-[0_4px_5px_rgba(251,157,38,0.06)] active:drop-shadow-[0_4px_5px_rgba(251,157,38,0.06)] rounded-lg overflow-hidden bg-darkColor pb-4 hover:scale-105 active:scale-105 border border-lightGold hov flex flex-col justify-between"
    >
      <div className="relative ease-in transition-all duration-300 overflow-hidden">
        <img
          src={props.image}
          alt={props.alt}
          className="ease-in transition-all duration-300 w-full group-hover:brightness-50 group-hover:scale-105 group-active:brightness-50 group-active:scale-105 group-focus:brightness-50 group-focus:scale-105"
        />

        {/* LINKS */}
        {<Link liveUrl={props.liveUrl} sourceCode={props.sourceCode} />}
      </div>

      {/* PROJECT INFO */}
      <ProjectInfo
        name={props.name}
        technologies={props.technologies}
        description={props.description}
        tags={props.tags}
        date={props.date}
      />
    </motion.article>
  );
}
