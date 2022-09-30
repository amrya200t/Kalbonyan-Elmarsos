import React from "react";
import Contacts from "./Contacts/Contacts";
import Socials from "../../../Components/Social/Socials";

import Form from "./Form/Form";

export default function HireMeSection() {
  return (
    <>
      <div className="border-b border-gold brightness-50"></div>
      <section
        id="contact"
        className="container mx-auto md:px-2 py-20 md:py-24  flex flex-col"
      >
        <h2 className="text-3xl font-bebas text-darkGold mb-8 px-4 sm:px-0">
          Hire Me
        </h2>

        <section className="ease-in transition-all duration-300 w-full px-4 sm:px-0 drop-shadow-[0_4px_2px_rgba(251,157,38,0.06)] self-center">
          <div className="grid lg:grid-cols-2 w-full h-full bg-darkColor border-lightGold border rounded-md">
            {/* Contact Information */}
            <section className="px-4 pt-4 border-b lg:border-r lg:border-b-0 border-lightGold text-light">
              {/* ADDRESS */}
              <Contacts />

              {/* SOCIAL LINKS */}
              <Socials hireMe={true} className="mb-4" />
            </section>

            {/* CONTACT FORM */}
            <Form />
          </div>
        </section>
      </section>
    </>
  );
}
