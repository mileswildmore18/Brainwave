import React from "react";
import { socials } from "../constants";
import Section from "./section";
const Footer = () => {
  return (
    // Add footer to website and make responsive on different size screens and devices
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Add current date along with Copyright sign*/}
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()}. All rights reserved
        </p>
        {/* Add social links */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            // Add link to each social icon
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {/* Add image of each icon */}
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
