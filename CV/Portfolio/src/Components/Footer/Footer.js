import React, { useEffect } from "react";
import Socials from "../Social/Socials";

export default function Footer() {
  useEffect(() => {
    const yearEl = document.querySelector(".copyright-year");
    const createdAt = 2022;
    const currentYear = new Date().getFullYear();
    yearEl.textContent =
      createdAt !== currentYear ? `${createdAt} - ${currentYear}` : createdAt;
  }, []);
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 md:px-0 flex flex-col sm:flex-row justify-between items-center gap-4 text-grey">
        <p className="text-sm">
          Copyright &copy; <span className="copyright-year">2022</span> by Amr
          Ezzat. All rights reserved.
        </p>
        <Socials setTitle={false} footerIcon={true} className="mt-0" />
      </div>
    </footer>
  );
}
