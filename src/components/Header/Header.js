import React from "react";
import "./Header.css";
import headerImage from "../../assets/header-image.png";

const Header = () => {
  return (
    <div className="page--header">
      <img            
       src={headerImage}
        alt="various meals"
        className="header--photo"
          />
    </div>

  )
}

export default Header;