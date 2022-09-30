// import SOCIAL_LINKS from "../../../Components/Social/SOCIAL_LINKS";
// import SocialLink from "./SocialLink";
import Socials from "../../../Components/Social/Socials";

import React from "react";
import { HashLink } from "react-router-hash-link";

import { FaAngleDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="z-0 bg-hero w-full bg-cover bg-center brightness-50  border-b border-gold h-screen"
        id="hero"
      ></section>
      <section>
        <article className="absolute top-1/2 left-1/2 text-light translate-x-[-50%] translate-y-[-50%] w-full text-center">
          <h1 className="font-poppins font-bold text-2xl md:text-4xl">
            Hello I'm Amr Ezzat Ahmed
          </h1>
          <h2 className="font-poppins font-bold text-lg md:text-xl pt-4">
            A passionate Front End Web Developer
          </h2>

          <HashLink
            to="/#contact"
            className="ease-in transition-all inline-block text-lg md:text-xl mt-4 py-4 px-4 border rounded 
            text-gold border-lightGold  hover:border-gold active:text-darkGold active:border-gold relative before:absolute   before:left-0 before:top-0 before:w-full before:h-full before:bg-darkGold before:origin-top-left  before:scale-x-0 before:ease-[cubic-bezier(0.5,1.6,0.4,0.7)] before:duration-300 before:hover:scale-x-100 before:z-[-1] before:hover:z-[0] before:hover:text-light before:active:text-light before:content-['Hire_Me'] before:flex before:justify-center before:items-center"
          >
            Need a web Developer?
          </HashLink>

          {/* Social Links */}
          <Socials />
        </article>

        {/* Move to First section */}
        <HashLink
          smooth
          to="/#about"
          className="absolute bottom-8 left-1/2 translate-x-[-50%]"
        >
          <FaAngleDown
            size="3rem"
            className="ease-in transition-all duration-300  text-gold hover:text-darkGold active:text-darkGold"
            aria-label="Go to First Section"
          />
        </HashLink>
      </section>
    </>
  );
}
