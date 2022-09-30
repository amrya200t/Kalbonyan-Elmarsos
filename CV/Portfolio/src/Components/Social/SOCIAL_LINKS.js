import { BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const IconClasses =
  "ease-in transition-all duration-300 cursor-pointer hover:text-gold active:text-gold";

const SOCIAL_LINKS = [
  {
    name: "Linked In",
    url: "https://www.linkedin.com/in/amrezzatofficial/",
    icon: <BsLinkedin size="2rem" className={IconClasses} />,
    footerIcon: <BsLinkedin size="1.25rem" className={IconClasses} />,
  },
  {
    name: "GitHub",
    url: "https://github.com/amrya200t",
    icon: <BsGithub size="2rem" className={IconClasses} />,
    footerIcon: <BsGithub size="1.25rem" className={IconClasses} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/AmroEAhmed",
    icon: <BsTwitter size="2rem" className={IconClasses} />,
    footerIcon: <BsTwitter size="1.25rem" className={IconClasses} />,
  },
  {
    name: "Whatsapp",
    url: "whatsapp://send?phone=+2001222978275",
    icon: <BsWhatsapp size="2rem" className={IconClasses} />,
    footerIcon: <BsWhatsapp size="1.25rem" className={IconClasses} />,
  },
  {
    name: "Email",
    url: "mailto:amr@amrezzat.com",
    icon: <MdEmail size="2.4rem" className={IconClasses} />,
    footerIcon: <MdEmail size="1.5rem" className={IconClasses} />,
  },
];

export default SOCIAL_LINKS;
