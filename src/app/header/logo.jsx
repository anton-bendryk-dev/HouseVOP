import React from "react";
import Logo from '../style/images/HouseVOP.png';
const LogoComponent = () => {
  return (
    <div>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo"></img>
        <p>ЖИЛОЙ КОМПЛЕКС</p>
      </a>
    </div>
  );
};
export default LogoComponent;