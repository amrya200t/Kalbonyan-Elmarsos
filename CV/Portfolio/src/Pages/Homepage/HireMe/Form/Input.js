import React from "react";

export default function Input(props) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        props.title ? "col-span-2" : "col-span-2 md:col-span-1"
      }`}
    >
      <label htmlFor={props.id} className="text-lightGold">
        {props.name}
      </label>
      <input
        ref={props.reference}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.id}
        required={props.isRequired}
        className="placeholder:italic rounded-md w-full p-3 bg-light text-darkColor font-poppins"
      />
    </div>
  );
}
