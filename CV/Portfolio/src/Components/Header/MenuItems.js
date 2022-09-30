import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default function MenuItems(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsOpen((prevState) => !prevState);
    props.isOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOpen) {
      document
        .querySelector("header")
        .classList.add("bg-darkColor", "shadow-md");
      document.querySelector(".menu").classList.remove("top-[-900%]");
      document.querySelector(".menu").classList.add("top-16");
    } else {
      if (!props.isDark && window.scrollY < 64) {
        document
          .querySelector("header")
          .classList.remove("bg-darkColor", "shadow-md");
      }
      document.querySelector("header").classList.add("text-light");
      document.querySelector(".menu").classList.add("top-[-900%]");
      document.querySelector(".menu").classList.remove("top-16");
    }
  }, [isOpen, props.isDark]);

  return (
    <div className="flex flex-col">
      {isOpen ? (
        <IoClose
          size="3rem"
          className="text-gold cursor-pointer mx-4 z-10"
          onClick={toggleMenuHandler}
        />
      ) : (
        <IoMenu
          size="3rem"
          className="text-gold cursor-pointer mx-4 z-10"
          onClick={toggleMenuHandler}
        />
      )}

      <div className="menu text-light ease-in transition-all duration-300 bg-darkColor absolute top-[-900%] w-full left-0 py-8 rounded-b-md max-h-screen">
        <ul className="items-center font-bebas text-2xl container mx-auto flex flex-col gap-6">
          {/* Sections */}
          <li>
            <HashLink
              smooth
              to="/#about"
              className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent active:border-gold hover:border-gold active:text-gold hover:text-gold"
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#projects"
              className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent active:border-gold hover:border-gold active:text-gold hover:text-gold"
            >
              Projects
            </HashLink>
          </li>

          {/* BLOG PAGE */}
          <li>
            <NavLink
              to="/blog"
              className="ease-in transition-all duration-300 px-4 py-2 h-full border-b border-transparent active:border-gold hover:border-gold active:text-gold hover:text-gold"
            >
              Blog
            </NavLink>
          </li>
          {/* CONTACT FORM */}
          <li>
            <HashLink
              smooth
              to="/#contact"
              className="ease-in transition-all duration-300 px-4 py-2 h-full border rounded-md border-gold text-gold hover:bg-darkGold hover:text-light active:bg-darkGold active:text-light"
            >
              Hire me
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
