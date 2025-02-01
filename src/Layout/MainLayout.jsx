import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ isDarkMode, toggleTheme }) => {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Outlet isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default MainLayout;
