import React from "react";
import Tag from "./Tag";
import Technologies from "./Technologies";

export default function ProjectInfo(props) {
  return (
    <div className="flex flex-col grow justify-between">
      <div className="mt-4 px-2">
        {/* PROJECT NAME */}
        <h2 className="text-lg mb-2 font-poppins text-gold">{props.name}</h2>

        {/* TECHNOLOGIES */}
        <Technologies technologies={props.technologies} />

        {/* PROJECT SUMMARY */}
        <p className="project-summary mt-4">{props.description}</p>
      </div>

      {/* CATEGORIES TAGS & DATE*/}
      <div className="flex justify-between items-center mt-4 px-2 text-sm text-light font-bebas ">
        <Tag tags={props.tags} />
        <span className="px-3 py-1 text-grey">{props.date}</span>
      </div>
    </div>
  );
}
