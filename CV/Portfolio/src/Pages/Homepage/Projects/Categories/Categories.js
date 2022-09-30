import React from "react";
import Category from "./Category";
import CATEGORIES_DATA from "./CATEGORIES_DATA";

export default function Categories(props) {
  const currentCategoryHandler = (e) => {
    const curCategory = e.target.textContent.trim().toLowerCase();
    if (!curCategory) return;
    // Set the selected Category
    props.setCategory(curCategory);

    const allCategories = document.querySelectorAll(".category");
    // Remove the selected Effect from all categories.
    allCategories.forEach((cat) => {
      cat.classList.remove("border-darkGold", "text-gold", "outline-none");
    });

    // Add the selected Effect to the selected Category.
    e.target.classList.add("border-darkGold", "text-gold", "outline-none");
  };

  return (
    <section className="w-full text-sm md:text-md lg:text-lg text-light mb-8 ">
      <ul className="ease-in transition-all duration-300 px-4 lg:px-0 grid gap-x-4 gap-y-3 grid-cols-3 justify-items-start sm:flex sm:justify-center sm:items-center sm:gap-4">
        {CATEGORIES_DATA.map((cat) => (
          <Category key={cat} category={cat} onClick={currentCategoryHandler} />
        ))}
      </ul>
    </section>
  );
}
