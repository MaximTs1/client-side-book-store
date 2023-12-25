import React from "react";
import BottomNav from "./components/BottomNav";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer_section">
        <BottomNav />
        <div className="line"></div>
        <h2>Created by - MT Web Solutions 2023 ©️</h2>
      </div>
    </div>
  );
}

export default Footer;