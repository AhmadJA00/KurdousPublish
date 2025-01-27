import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Outlet />
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default RootLayout;
