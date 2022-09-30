import React, { useEffect } from "react";

export default function Category(props) {
  useEffect(() => {
    // Mark the first Category "All"
    document
      .querySelector(".category")
      .classList.add("border-darkGold", "text-gold", "outline-none");
  }, []);

  return (
    <li>
      <button
        className="category ease-in transition-all duration-300 border px-4 py-2 rounded-lg border-lightGold hover:border-darkGold hover:text-gold active:border-darkGold active:text-gold focus:outline-none focus:border-gold focus:text-gold"
        onClick={props.onClick}
      >
        {props.category}
      </button>
    </li>
  );
}
