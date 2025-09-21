import React from "react";
import FooterLogo from "../../assets/Logo.png";
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaLocationArrow, FaMobileRetro } from "react-icons/fa6";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-r from-secondary to-primary dark:bg-[#68471a] dark:bg-none">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">

          <div className="px-4">
            <h1 className="sm:text-2xl text-xl font-bold flex items-center gap-3 mb-3">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Eaque quo modi fugit rem incidunt aut aspernat.
            </p>
          </div>


          <div className="px-4">
            <h1 className="sm:text-2xl text-xl font-bold mb-3">Important Links</h1>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li
                  key={link.title}
                  className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                >
                  <span className="text-sm">{link.title}</span>
                </li>
              ))}
            </ul>
          </div>


          <div className="px-4">

            <div className="flex items-center gap-4 mb-6">
              <a href="#"><FaInstagram className="text-4xl hover:text-primary duration-300" /></a>
              <a href="#"><FaFacebook className="text-4xl hover:text-primary duration-300" /></a>
              <a href="#"><FaXTwitter className="text-4xl hover:text-primary duration-300" /></a>
              <a href="#"><FaLinkedin className="text-4xl hover:text-primary duration-300" /></a>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <FaLocationArrow className="text-xl mt-1" />
              <p>Noida, Uttar Pradesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaMobileRetro className="text-xl" />
              <p>+91 123456789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
