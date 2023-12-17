import header from "../assets/header.png";
import footer from "../assets/footersten.png";
import logo from "../assets/krologo.png";
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
  marginTop: '50px',
};


const imgStyle = {
  position: 'absolute',
  right: '10px',
};

export default function BackgroundAdmin() {
  return (
    
    <section>
      <div style={sectionStyleHeader}></div>
        
        <img className="logo-kro" src={logo} alt="Kro Logo" style={imgStyle} />
        
      
      <div style={{ flexGrow: 1 }}>
       
      </div>
      
      <div style={sectionStyleFooter}>
       
      </div>
    </section>
    
  );
}