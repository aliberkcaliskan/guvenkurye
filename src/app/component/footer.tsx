import React from "react";
import {FaInstagram} from "react-icons/fa";

interface SocialIcon {
  href: string;
  path: any;
  label: string;
}

const socialIcons: SocialIcon[] = [
  {
    href: "#",
    path: <FaInstagram />,
    label: "Instagram",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center my-12">
        {socialIcons.map((icon, index) => (
          <a
            aria-label={icon.label}
            key={index}
            href={icon.href}
            className="mx-4"
          >
            <div className="text-3xl">{icon.path}</div>
          </a>
        ))}
      </div>
      <div className="flex justify-center text-bold text-xl">Telefon Numarası</div>
      <a className="flex justify-center text-bold text-3xl mt-4" href="tel:531 562 51 31">(+90) 531 562 51 31</a>
      <div className="container mx-auto text-center py-12 mt-12 border-t border-gray-200 text-xs uppercase">
        <div>Copyright &copy; {new Date().getFullYear()} Güven Kurye</div>
      </div>
    </div>
  );
};

export default Footer;
