import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook,  FaGithub, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {Link} from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "Service", link: "/service" },
  { title: "Contact", link: "/contact" },
  { title: "Login", link: "/login" },
];

const CustomerService = [
  { title: "FAQ", link: "/#" },
  { title: "Returns", link: "/#returns" },
  { title: "Privacy & Policy", link: "/#privacy" },
  { title: "Terms & Conditions", link: "/#terms" },
];

const Footer = () => {
  return (
    <footer style={BannerImg} className="text-white mt-10 ">
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="grid gap-20 md:grid-cols-3 ml-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="logo" className="w-12" />
              <h1 className="text-2xl font-bold">
                Online <span className="text-orange-500">Shop</span>
              </h1>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Our online shop offers a wide range of quality products at
              affordable prices. Customers can easily browse and order in just
              a few clicks.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 underline">Important Links</h2>
              <ul className="space-y-2 text-gray-200 text-sm">
                {FooterLinks.map((link) => (
                  <li key={link.title} className="hover:text-orange-400 cursor-pointer transition">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 underline">Customer Service</h2>
              <ul className="space-y-2 text-gray-200 text-sm">
                {CustomerService.map((link) => (
                  <li key={link.title} className="hover:text-orange-400 cursor-pointer transition">
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h2 className="text-lg font-semibold mb-4 underline">Contact Us</h2>

            <div className="flex gap-4 mb-4 text-2xl">
              <Link to="https://github.com/arvind538?tab=repositories"><FaGithub  className="cursor-pointer hover:text-orange-400" /></Link>
              <Link to="https://www.linkedin.com/feed/"><FaLinkedin className="cursor-pointer hover:text-orange-400" /></Link>
              {/* <FaFacebook className="cursor-pointer hover:text-orange-400" /> */}
              <Link to="https://maps.app.goo.gl/QRnBRTKxgk5jz5Xj6"><FaLocationDot className="cursor-pointer hover:text-orange-400" /></Link>
              
            </div>

            <div className="text-gray-200 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <FaLocationArrow /> Jaipur, Rajasthan
              </div>
              <div className="flex items-center gap-2">
                <FaMobileAlt /> +91 9973215343
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Online Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;