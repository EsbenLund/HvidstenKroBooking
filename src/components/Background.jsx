

import header from "../assets/header.png";
import footer from "../assets/footersten.png";
import logo from "../assets/krologo.png";
import arrow from "../assets/goback.png";
import React from "react";

const sectionStyleHeader = {
  backgroundImage: `url(${header})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100px', 
  width: '100%', 
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const sectionStyleFooter = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100px', 
  backgroundImage: `url(${footer})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imgStyle = {
  margin: '0 10px', 
};

export default function Background() {
  return (
    <section>
      <div style={sectionStyleHeader}>
        {/* Headerindhold her */}
      </div>
      
      <div className="logonarrow" style={rowStyle}>
        <a href="/">
        <img className="arrow-kro" src={arrow} alt="Go back arrow" style={imgStyle} />
        </a>

        
        <img className="logo-kro" src={logo} alt="Kro Logo" style={imgStyle} />
        {}
      </div>
      
      <div style={{ flexGrow: 1 }}>
        {/* Eventuelt indhold mellem header og footer */}
      </div>
      
      <div style={sectionStyleFooter}>
        {/* Footerindhold her */}
      </div>
    </section>
  );
}