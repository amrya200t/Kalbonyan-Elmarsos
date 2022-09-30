import React, { useEffect, useState } from "react";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const summaryEl = document.querySelector(".aboutMeSummary");
    const obs = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { root: null, threshold: 0 }
    );

    obs.observe(summaryEl);
  }, []);

  useEffect(() => {
    const typewriter = () => {
      const command = document.querySelector(".whoami");
      command.textContent = "";
      const whoamiSummary = document.querySelector(".whoamiSummary");
      command.style.color = "#e2e8f0";
      whoamiSummary.style.opacity = "0";

      let count = 0;
      const typeCommend = setInterval(() => {
        command.textContent += command.dataset.command[count];
        count += 1;
        if (count > command.dataset.command.length - 1) {
          clearInterval(typeCommend);
          command.style.color = "#4e9a06";
          whoamiSummary.style.opacity = "1";
        }
      }, 120);
    };

    if (isVisible) {
      typewriter();
    }
  }, [isVisible]);

  return (
    <section className="drop-shadow-[0_2px_1px_rgba(251,157,38,0.06)]">
      <article className="aboutMeSummary text-light py-12 px-6 bg-primaryColor rounded-xl">
        <p className="mb-4 p-2 rounded-lg border border-lightGold">
          <span className="text-darkGold font-bold">&#36; &nbsp;</span>{" "}
          <span className="whoami" data-command="whoami"></span>
        </p>
        <p className="whoamiSummary opacity-0 ease-in transition-all">
          <span className="text-darkGold font-bold">&gt; &nbsp;</span>
          <span className="text-justify xl:text-left">
            Hello! I'm Amr Ezzat, a{" "}
            <span className="text-darkGold font-bold">Front-end</span> web
            developer. I'm a Computer Science Student at the {""}
            <a
              href="https://www.london.ac.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-gold border-b border-b-transparent pb-1 hover:border-b-darkGold active:border-b-darkGold"
            >
              University of London
            </a>
            . I've worked on many projects through my academic study and online
            courses. I've just started my professional career in the web
            development industry.
          </span>
        </p>
      </article>
    </section>
  );
}
