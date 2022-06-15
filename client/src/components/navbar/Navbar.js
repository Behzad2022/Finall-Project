import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import Logo1 from "../../assets/logo1.jpg"
import styled from "styled-components";

import "./Navbar.css";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const chengeBackground = () => {
    if (window.scrolly >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <nav className={navbar ? 'navbar active':'navbar'}>
      <div className="logo1">
      <a href='/' className='logo'><Logo src={Logo1} size={33} /></a>

              
        {/* <SiAnaconda color="#fff" size={33} />
        <p className="logo-text">
                  Social<span>X</span>
                  
                 
                  

                  
        </p> */}
          </div>
         
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="/nextstep">Day Club</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#ContactUs">Contact Us</a>
          </li>

          {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
          <li className="nav-btn">
            <Button text={"REQUEST A QUOTE"} btnClass={"btn-dark"} href={"#support"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};
const Logo = styled.img`
  width: 80px;
  margin-bottom: 15px;
  margin-left: 35px;
`;

export default Navbar;

