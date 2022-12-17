import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (e) => {
    const targetElement = e.target.innerHTML;
    if (targetElement === "Home") {
      setActiveTab("Home");
    } else if (targetElement === "About") {
      setActiveTab("About");
    } else {
      setActiveTab("Contact");
    }
  };

  return (
    <div className="tabContainer">
      <div onClick={handleTabClick} className="tab">
        Home
      </div>
      <div onClick={handleTabClick} className="tab">
        About
      </div>
      <div onClick={handleTabClick} className="tab">
        Contact
      </div>
    </div>
  );
};

export default Tabs;
