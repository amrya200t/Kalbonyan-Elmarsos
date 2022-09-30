import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FaLaptopCode } from "react-icons/fa";
import MenuItems from "./MenuItems";
import NavItems from "./NavItems";

export default function Header() {
  const location = useLocation();
  const [mobileVersion, setMobileVersion] = useState(false);
  const [initial, setInitial] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [darkNav, setDarkNav] = useState(false);

  const init = useCallback(() => {
    if (initial) return;
    if (!mobileVersion && window.innerWidth <= 1024) setMobileVersion(true);
    setInitial(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileVersion, initial, location]);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    const blog = document.querySelector('header nav ul li a[href="/blog"]');
    if (blog.classList.contains("active")) {
      blog.classList.add("border-gold", "text-gold");
      blog.classList.remove("border-transparent");
    } else {
      blog.classList.remove("border-gold", "text-gold");
      blog.classList.add("border-transparent");
    }
  }, [location.pathname]);

  useEffect(() => {
    const headerHeight = document
      .querySelector("header")
      .getBoundingClientRect().height;
    const navLinks = [...document.querySelectorAll("header nav ul li a")].slice(
      0,
      2
    );
    const sections = [
      document.getElementById("about"),
      document.getElementById("projects"),
    ];

    const scrollHandler = () => {
      if (location.pathname === "/") {
        navLinks.forEach((link, i) => {
          if (
            window.scrollY >= sections[i].offsetTop - headerHeight &&
            window.scrollY <
              sections[i].offsetTop + sections[i].offsetHeight - headerHeight
          ) {
            if (link.classList.contains("border-gold")) return;
            link.classList.add("border-gold", "text-gold");
            link.classList.remove("border-transparent");
            console.log(link);
          } else {
            link.classList.remove("border-gold", "text-gold");
            link.classList.add("border-transparent");
          }
        });
      } else {
        navLinks.forEach((link, i) => {
          link.classList.remove("border-gold");
          link.classList.add("border-transparent");
        });
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [location.pathname]);

  const ScrollToTopHandler = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (navOpen) return;

    const onScroll = () => {
      if (window.scrollY > 64) {
        document
          .querySelector("header")
          .classList.add("bg-darkColor", "shadow-md");
        setDarkNav(true);
      } else {
        document
          .querySelector("header")
          .classList.remove("bg-darkColor", "shadow-md");
        document.querySelector("header").classList.add("text-light");
        setDarkNav(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileVersion, navOpen]);

  useEffect(() => {
    const onResize = () => {
      if (!mobileVersion && window.innerWidth <= 1024) setMobileVersion(true);
      if (mobileVersion && window.innerWidth > 1024) setMobileVersion(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileVersion]);

  return (
    <header className="z-10 w-full h-16 fixed left-2/4 translate-x-[-50%] ease-in transition-all duration-300 text-light">
      {/* HIDDEN LINK */}
      <HashLink
        smooth
        to="/#hero"
        className="ease-in-out transition-all fixed top-0 right-0 left-0 text-center bg-darkColor p-4 -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </HashLink>

      {/* MAIN NAVIGATION BAR */}
      <nav className="container mx-auto flex justify-between items-center h-full">
        {/* LOGO */}
        <NavLink
          to="/"
          className="flex gap-2 px-4 h-full items-center text-gold z-10"
          aria-label="Logo"
          onClick={ScrollToTopHandler}
        >
          <FaLaptopCode size="3rem" />
        </NavLink>

        {/* Navigation bar */}
        {mobileVersion ? (
          <MenuItems isOpen={setNavOpen} isDark={darkNav} />
        ) : (
          <NavItems />
        )}
      </nav>
    </header>
  );
}
