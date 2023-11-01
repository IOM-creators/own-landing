import React from "react";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className="footer pt-12 pb-12 xl:pt-24 xl:pb-24 font-serif relative before:block  before:absolute before:content-'' before:w-full before:top-0 before:h-px before:bg-dark-blue">
      <div className="container lg:flex lg:justify-between text-center lg:text-left">
        <div className="footer-item lg:max-w-[300px] lg:mr-[11%]">
          <a href="/" className="footer-logo">
            <Icon icon="light-logo" className="inline-block" />
          </a>
          <div className="mt-4 xl:mt-10 text-gray">
            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </div>
          <div className="mt-4 xl:mt-16  text-gray">All rights reserved.</div>
        </div>

        <div className="footer-item mt-10 lg:mt-0 lg:w-[150px] lg:mr-[96px]">
          <h5 className="font-bold text-xl">Landings</h5>
          <ul className="text-gray text-xl">
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Home
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Products
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item mt-10 lg:mt-0 lg:w-[150px] lg:mr-[96px]">
          <h5 className="font-bold text-xl">Company</h5>
          <ul className="text-gray text-xl">
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Home
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Careers
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Services
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item mt-10 lg:mt-0 lg:w-[150px]">
          <h5 className="font-bold text-xl">Resources</h5>
          <ul className="text-gray text-xl">
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Blog
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Services
              </a>
            </li>
            <li className="mt-6 lg:mt-8">
              <a href="/" className=" hover:underline">
                Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
