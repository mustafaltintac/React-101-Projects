import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/burgerlogo.png";
import "../style/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="main ">
        <img  src={Logo} alt="LogoBurger" />
        <div className="mainLink" >
          <Link to={"./"}> ANASAYFA </Link>
          <Link to={"./menu"}> MENU </Link>
          <Link to={"./aboutUs"}> HAKKIMIZDA </Link>
          <Link to={"./contact"}> İLETİŞİM </Link>
        </div>
      </div>
    </div>
  );
}

