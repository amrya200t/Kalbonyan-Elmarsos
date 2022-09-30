import React from "react";
import icons from "../ImportingData";

export default function Link(props) {
  return (
    <div className="absolute ease-in transition-all duration-300 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max flex items-center justify-center text-gold gap-4 opacity-0 pointer-events-none invisible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:visible group-active:opacity-100 group-active:pointer-events-auto group-active:visible group-focus:opacity-100 group-focus:pointer-events-auto group-focus:visible">
      {props.liveUrl && (
        <a
          href={props.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="ease-in transition-all duration-300  border py-2 px-4 rounded-md border-light hover:text-darkGold active:text-darkGold bg-transparentColor hover:border-gold active:border-gold flex gap-2"
        >
          <span className="lg:hidden xl:inline">{icons.browser}</span>
          Live demo
        </a>
      )}
      {props.sourceCode && (
        <a
          href={props.sourceCode}
          target="_blank"
          rel="noreferrer"
          className="ease-in transition-all duration-300  border py-2 px-4 rounded-md border-light hover:text-darkGold active:text-darkGold bg-transparentColor hover:border-gold active:border-gold flex gap-2"
        >
          <span className="lg:hidden xl:inline">{icons.github}</span>
          Source Code
        </a>
      )}
    </div>
  );
}
