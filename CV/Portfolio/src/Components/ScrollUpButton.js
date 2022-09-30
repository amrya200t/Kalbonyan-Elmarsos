// import modules
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [endPage, setEndPage] = useState(false);

  // Move the button to the up and right when the footer appears.
  useEffect(() => {
    const footerEl = document.querySelector("footer");
    const obs = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setEndPage(true);
        } else {
          setEndPage(false);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-10px",
      }
    );

    obs.observe(footerEl);
  }, []);

  // Add hiddenEl to show the button on scroll.
  useEffect(() => {
    const hiddenDiv = document.createElement("div");
    hiddenDiv.id = "hiddenDiv";
    hiddenDiv.className =
      "h-52 border absolute top-0 left-0 opacity-0 pointer-events-none invisible";
    document.body.appendChild(hiddenDiv);

    const hiddenEl = document.getElementById("hiddenDiv");
    const obs = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    obs.observe(hiddenEl);
  }, []);

  const scrollUpHandler = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };

  const buttonClasses = () => {
    const classes = `ease transition-all duration-300 fixed z-100 hover:text-darkGold active:text-darkGold border-none shadow-[0_4px_6px_-1px_rgba(251,157,38,0.2)] rounded-lg text-2xl text-gold bg-darkColor px-4 py-3 ${
      endPage
        ? "bottom-16 right-6 active:bottom-[72px] hover:bottom-[72px]"
        : "bottom-8 right-8 active:bottom-10 hover:bottom-10"
    }`;

    return isVisible ? classes : "hidden";
  };

  return (
    <button
      id="scroll-top"
      aria-label="Scroll to top button"
      onClick={scrollUpHandler}
      className={buttonClasses()}
    >
      <FaAngleUp />
    </button>
  );
}
