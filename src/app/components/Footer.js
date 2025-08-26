import React from 'react'
import { FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-me">
        <input type="email" placeholder="send an email" />
        <button>send</button>
        <BsFillTelephoneOutboundFill />
      </div>
      <div className='search'>
        <input type='input' placeholder='search site'/>
        <button>search</button>
      </div>
      <div className="social-media">
        <FaFacebook />
        <BsTwitterX />
        <FaWhatsapp />
        <FaGithub />
      </div>
      <div className='watermark'>
        
      </div>
    </div>
  );
}

export default Footer
