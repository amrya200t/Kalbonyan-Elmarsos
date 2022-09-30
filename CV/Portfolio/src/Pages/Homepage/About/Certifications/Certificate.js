import React from "react";

export default function Certificate(props) {
  return (
    <tr className="border-b hover:text-lightGold active:text-lightGold">
      <td className="py-4 inline-block w-full ">
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className="flex gap-1 items-center"
        >
          <span className="shrink-0">{props.icon}</span>
          <span className="flex-1">{props.name}</span>
        </a>
      </td>
      <td>{props.date}</td>
    </tr>
  );
}
