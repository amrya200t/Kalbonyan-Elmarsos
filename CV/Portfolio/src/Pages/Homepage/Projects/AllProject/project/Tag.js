import React from "react";

export default function Tag(props) {
  return (
    <div className="flex gap-2">
      {props.tags.map((tag, i) => (
        <span
          key={tag}
          className="ease-in transition-all duration-300 border px-3 py-1 rounded-lg border-gold"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
