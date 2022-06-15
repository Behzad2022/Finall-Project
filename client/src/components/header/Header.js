import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import photo from "../../assets/photo1.jpg";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (

    
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>The global leader</span>
            <span>in oil-free chillers</span>
            
          </h1>
          <p className="u-text-small">
            Day's team has over 20 years of exprience in oil-free chillers
            with more than 1000 project installed
          </p>
          <div className="header-cta">
            <Button text={"LEARN MORE"} btnClass={"btn-dark"} href={"#support"} />
            <Button text={"CONTACT US"} btnClass={"btn-light"} href={"#subscribe"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={photo} alt="photo" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};


export default Header;