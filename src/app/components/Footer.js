import React from 'react'
import { FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <FaFacebook />
        <BsTwitterX />
        <FaWhatsapp />
        <FaGithub />
      </div>
    </div>
  );
}

export default Footer
