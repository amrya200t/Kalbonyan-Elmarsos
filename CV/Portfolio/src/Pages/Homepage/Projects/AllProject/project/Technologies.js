import React from "react";

export default function Technologies(props) {
  return (
    <ul className="flex gap-2 items-center text-md text-light font-bebas">
      {props.technologies.map((tech, i) => (
        <li key={i}>{tech}</li>
      ))}
    </ul>
  );
}
