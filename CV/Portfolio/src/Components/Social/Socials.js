import React from "react";
import SOCIAL_LINKS from "./SOCIAL_LINKS";
import SocialLink from "./SocialLink";

export default function Socials(props) {
  const { className, setTitle = true, hireMe, footerIcon = false } = props;
  return (
    <aside className={`mt-8 text-gold ${className}`}>
      {setTitle && <h2 className="mb-4">Find me on social media</h2>}
      <ul
        className={`flex gap-4 text-light ${
          hireMe ? "" : "justify-center"
        } items-center`}
      >
        {!footerIcon &&
          SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.name}
              title={link.name}
              url={link.url}
              icon={link.icon}
            />
          ))}

        {footerIcon &&
          SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.name}
              title={link.name}
              url={link.url}
              icon={link.footerIcon}
            />
          ))}
      </ul>
    </aside>
  );
}
