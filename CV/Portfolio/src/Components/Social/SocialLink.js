import React from "react";

export default function SocialLink(props) {
  return (
    <li>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        aria-label={props.title}
      >
        {props.icon}
      </a>
    </li>
  );
}
