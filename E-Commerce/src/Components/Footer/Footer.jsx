import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FaMapLocation, FaMapLocationDot } from 'react-icons/fa6';
import {
          FaFacebook,
          FaInstagram,
          FaLinkedin,
          FaLocationArrow,
          FaMobileAlt,
          FaShoppingBag,
       } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const FooterLinks =[
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#"
  },
  {
    title: "Contact",
    link: "/#"
  },
  {
    title: "Blog",
    link: "/#"
  },
];
const Footer = () => {
  return (
    <div className='text-white bg-[#212529]'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1'>
              <FiShoppingBag size="30" />
              ShopMe
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint esse quae, earum ratione delectus iste aspernatur consequatur atque a sequi vitae itaque pariatur repellendus? Velit, nisi nostrum accusamus tempora minima quos.
            </p>
          </div>
          <div>
            <div className='py-8 px-4'>
              <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                Important Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link) => (
                  <li className='cursor-pointer hover:text-primery hover:translate-x-1 duration-300 text-gray-200' 
                  key={link.title} >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className='py-8 px-4'>
            <h1 className='sm-text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                 Links
              </h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map((link) => (
                  <li className='cursor-pointer hover:text-primery hover:translate-x-1 duration-300 text-gray-200' 
                  key={link.title} >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-3 mt-6'>
              <a href="#">
                <FaInstagram className='text-3xl' />
              </a>
              <a href="#">
                <FaLinkedin className='text-3xl' />
              </a>
              <a href="#">
                <FaFacebook className='text-3xl' />
              </a>
            </div>
            <div className='mt-6'>
              <div className='flex items-center gap-3'>
                <FaMapLocationDot />
                <p> Mumbai, Maharashtra</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <IoCall />
                <p>+93729 01978</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer