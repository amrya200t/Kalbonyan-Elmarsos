import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  return (
    <aside>
      <h2 className="text-2xl font-bebas text-gold mb-2">
        Contact Information
      </h2>

      <p className="text-lightGold mb-8 font-poppins">
        You can send me a direct email from the form.
      </p>

      <address className="flex flex-col gap-4 text-grey">
        <p className="flex gap-2 items-center">
          <FaMapMarkedAlt size="1.5rem" className="text-lightGold" />
          Egypt
        </p>
        <p className="flex gap-2 items-center">
          <MdEmail size="1.5rem" className="text-lightGold" />
          amr@amrezzat.com
        </p>
        <p className="flex gap-2 items-center">
          <BsWhatsapp size="1.5rem" className="text-lightGold" />
          +20-01222978275
        </p>
      </address>
    </aside>
  );
}
