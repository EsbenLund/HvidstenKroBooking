import header from "../assets/header.png";
import footer from "../assets/footersten.png";
import logo from "../assets/krologo.png";
import arrow from "../assets/goback.png";
import React from "react";
import { Link } from 'react-router-dom';

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
  marginTop: '50px',
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
       
      </div>
      
      <div className="logonarrow" style={rowStyle}>
      <Link to="#" onClick={() => window.history.back()}>
      <img className="arrow-kro" src={arrow} alt="Go back arrow" style={imgStyle} />
      </Link>

        
        <img className="logo-kro" src={logo} alt="Kro Logo" style={imgStyle} />
        {}
      </div>
      
      <div style={{ flexGrow: 1 }}>
      
      </div>
      
      <div style={sectionStyleFooter}>
      
      </div>
    </section>
  );
}