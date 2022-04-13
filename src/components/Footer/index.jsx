/* eslint-disable jsx-a11y/control-has-associated-label */
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './style.css';

const Footer = () => (
  <footer className="bg-indigo-800 2xl:container py-4 inset-x-0 bottom-0">
    <div className="container my-auto hs-max-width-85">
      <div className="flex justify-between">
        <div className="footer-social-links text-white flex text-2xl">
          <a href className="cursor-pointer"><FaFacebook /></a>
          <a href className="cursor-pointer mx-12"><FaInstagram /></a>
          <a href className="cursor-pointer"><FaTwitter /></a>
        </div>
        <div className="flex justify-between text-white">
          <a href className="mx-6 cursor-pointer">About</a>
          <a href className="cursor-pointer">Contact Us</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
