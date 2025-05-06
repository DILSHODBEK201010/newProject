import React from 'react'
import logo from "../../assets/images/logo.png"
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { GrFedora } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row flex-wrap items-start md:items-center justify-center gap-8 md:gap-16 lg:gap-28 mt-16 px-4'>

      <div className="one_foter text-center md:text-left max-w-xs">
        <img src={logo} alt="" className="mx-auto md:mx-0 mb-2" />
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, <br />
          sed do eiusmod tempor <br />
          incididunt ut labore et <br />
          dolore magna aliqua.
        </p>
      </div>

      <div className="two_div text-center md:text-left">
        <b>Contact us</b><br />
        <p>E: <u>info@example.com</u></p>
        <p>P: +94 767 0000000</p>
        <p>A: 123 Hospital rd,</p>
        <p>Kalubowilla, Dehiwela</p>
      </div>

      <div className="there_div text-center md:text-left">
        <b>Useful links</b><br />
        <p>Shop All</p>
        <p>Tempered Glass</p>
        <p>Back-cover</p>
        <p>About Us</p>
      </div>

      <div className="four_div text-center md:text-left">
        <p className='flex justify-center md:justify-start items-center gap-2'><FaWhatsappSquare /> Whatsapp</p>
        <p className='flex justify-center md:justify-start items-center gap-2'><GrFedora /> Facebook</p>
        <p className='flex justify-center md:justify-start items-center gap-2'><FaInstagramSquare /> Instagram</p>
        <p className='flex justify-center md:justify-start items-center gap-2'><AiFillTikTok /> TikTok</p>
      </div>

    </div>
  )
}

export default Footer
