import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import danfoss from "../../assets/danfoss.png";


const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>technical & specification </h2>
        <p className="u-text-small">
          Our catalog are available for download .
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
            <img src={danfoss} alt="logo" width="201" height="103" />

            </div>
            <div className="download-icon">
            <img src={danfoss} alt="logo" width="201" height="103" />

            </div>
            <div className="download-icon">
            <img src={danfoss} alt="logo" width="201" height="103" />

            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;