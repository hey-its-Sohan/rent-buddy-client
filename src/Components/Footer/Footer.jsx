import React from 'react';
import logo from '../../assets/logo.png'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-purple-500 text-primary-content p-10">
        <aside>
          <img
            className='w-56'
            src={logo}
            alt="" />
          <p className="text-2xl text-white font-bold my-3">
            Rent Buddy Ltd.
            <br />
            Providing reliable services since 2019
          </p>
          <p className='text-lg'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="flex items-center gap-4 text-white">

            <a href="https://www.linkedin.com/in/mahmudul-islam-sohan/"><Linkedin size={32} color="white" fill='white' /></a>
            <a href="https://www.facebook.com/mahmudul.islam.sohan.2025/"><Facebook size={32} color="white" fill='white' /></a>
            <a href="https://github.com/hey-its-Sohan"><Github size={32} color="white" fill='white' /></a>
          </div>
        </nav>
      </footer>

    </div>
  );
};

export default Footer;