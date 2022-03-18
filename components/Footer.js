import React from "react";
import { BsTwitter, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="  mt-10 footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div className=" text-xl">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/Pawantamada21">
              <BsTwitter />
            </a>
            <a href="https://github.com/pawan67">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/pawan-tamada-abb073199/">
              <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/pawan67_/">
              <BsInstagram />
            </a>
          </div>
        </div>
        <div>
          <p>
            Developed with 💚 by{" "}
            <a className=" underline" href="https://pawan67.github.io">
              Pawan67
            </a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
