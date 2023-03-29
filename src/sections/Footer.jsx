import React from "react";
import { MdEmail, MdWhatsapp, MdCall } from "react-icons/md";
import { GiSpaceSuit } from "react-icons/gi";

const Footer = () => {
  return (
    <footer
      id="#Contact"
      className="footer mt-20 p-10 bg-neutral text-neutral-content"
    >
      <div>
        <span className="footer-title">Contact Me</span>
        <div className="grid grid-flow-col gap-4 justify-center">
          <div className="flex flex-col justify-center mx-4">
            <a
              href="mailto:elpraise20@gmail.com"
              className="text-secondary-focus hover:underline"
            >
              <MdEmail className="text-4xl text-center" />
              Email
            </a>
          </div>
          <div className="flex flex-col justify-center mx-4">
            <a
              href="https://wa.me/+2348117292451"
              className="text-secondary-focus hover:underline"
            >
              <MdWhatsapp className="text-4xl text-center mm" />
              WhatsApp
            </a>
          </div>
          <div className="flex flex-col justify-center mx-4">
            <a
              href="tel:+2348117292451"
              className="text-secondary-focus hover:underline text-center"
            >
              <MdCall className="text-4xl text-center" />
              Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
