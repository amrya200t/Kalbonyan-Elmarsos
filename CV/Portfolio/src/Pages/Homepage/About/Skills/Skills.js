import React from "react";
import Skill from "./Skill";
import SKILLS_DATA from "./SKILLS_DATA";

export default function Skills() {
  return (
    <section className="mt-12 px-4 sm:px-0">
      <h3 className="text-2xl font-bebas text-gold mb-6">Skills</h3>
      <article className="">
        <h4 className="text-light mb-8">
          Here is a list of some languages, tools, and technologies that I know.
        </h4>
        <ul className="grid gap-x-4 gap-y-8 grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-center justify-items-center  text-light">
          {SKILLS_DATA.map((skill) => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </ul>
      </article>
    </section>
  );
}
