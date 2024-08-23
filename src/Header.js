import React, { useState } from "react";
import "./css/Header.css";
import logo from "./images/Removebg_logo.png";
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the sidebar
  const openNav = () => {
    setIsSidebarOpen(true);
  };

  const closeNav = () => {
    setIsSidebarOpen(false);
  };

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function that handles navigation based on link text or data attribute
  const handleNavigation = (event, destination) => {
    event.preventDefault(); // Prevent the default anchor behavior
    navigate(`/${destination}`);
  };

  return (
    <header>
      {/* Sidebar toggle button */}
      <button className="openbtn" onClick={openNav}>
        &#9776;
      </button>
      <img
        src={logo}
        alt="ignition-alliance-logo"
        className="header-logo"
      />

      {/* Dropdown menu */}
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          👤
        </button>
        {/* Show the dropdown content only if isDropdownOpen is true */}
        {isDropdownOpen && (
          <div id="myDropdown" className="dropdown-content show">
            <a href="#home">My Account</a>
            <a href="#settings">Settings</a>
            <a href="#notifications">Notifications</a>
            <a href="#logout">Log Out</a>
          </div>
        )}
      </div>

      {/* Sidebar navigation */}
      <nav
        id="mySidebar"
        className="sidebar"
        style={{ width: isSidebarOpen ? "250px" : "0" }}
      >
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="/dashboard" onClick={(e) => handleNavigation(e, "dashboard")}>Dashboard</a>
        <a href="/network"  onClick={(e) => handleNavigation(e, "network")}>Network</a>
        <a href="/tools" onClick={(e) => handleNavigation(e, "tools")} >Tools</a>
        <a href="/withdrawals"  onClick={(e) => handleNavigation(e, "withdrawals")} >Withdrawals</a>
        <a href="#">Reports</a>
      </nav>
    </header>
  );
}
