import React from "react";
import logo from "../assets/logo.png";
function Logo({ width = "100%" }) {
  return (
    <div className=" w-16 flex justify-start">
      <img src={logo} alt="" />
    </div>
  );
}

export default Logo;
