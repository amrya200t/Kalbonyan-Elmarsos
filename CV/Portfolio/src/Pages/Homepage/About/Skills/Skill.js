import React from "react";

export default function Skill(props) {
  return (
    <li className="flex flex-col justify-center items-center gap-2 font-poppins">
      {props.icon}
      <span>{props.name}</span>
    </li>
  );
}
