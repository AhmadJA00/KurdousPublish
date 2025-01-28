import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_light_mode from "../assets/images/light_logo.png";
import logo_dark_mode from "../assets/images/dark_logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
// Navbar dropdown
export const NavLinks = [
  { id: 1, name: "سەرەکی", link: "/", isActive: false },
  {
    id: 2,
    name: "دۆکیۆمێنتارییەکان",
    link: "/DocumenterisFilter",
    isActive: false,
    submenu: [
      {
        id: 1,
        name: "ژیانی ئاژەڵە کێوییەکان",
        link: "/DocumenterisFilter?type=ژیانی ئاژەڵە کێوییەکان",
      },
    ],
  },
  { id: 3, name: "وەرگێڕەکان", link: "/TranslatorsPages", isActive: false },
];
const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNav = () => setShowNavbar(!showNavbar);

  const location = useLocation();
  const currentPath = location.pathname;
  const getNavbarOpacity = () => {
    return currentPath === "/" && !openSubmenu
      ? `bg-opacity-100 lg:bg-opacity-60 `
      : ` border-b-[1px] rounded-xl `;
  };

  const [openSubmenu, setOpenSubmenu] = useState(false);
  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? false : id);
  };
  return (
    <section className="flex items-center justify-center ">
      <div
        className={` ${getNavbarOpacity()} ${
          isDarkMode
            ? `bg-dark-primary text-dark-secondary`
            : `bg-light-primary text-light-secondary`
        } flex  justify-center items-center ${
          showNavbar ? "rounded-3xl" : "rounded-full"
        }  w-11/12 top-5 absolute z-10 `}
      >
        <div className={`container py-2 md:py-0 z-20`}>
          <div className={`flex px-5 justify-between items-stretch`}>
            <img
              src={isDarkMode ? logo_dark_mode : logo_light_mode}
              className=" h-20 w-28 md:h-24 md:w-36 object-cover"
            />
            <ul className="hidden md:flex justify-between items-stretch gap-5">
              {NavLinks.map(({ id, name, link, submenu }) => (
                <li
                  key={id}
                  className=" group font-semibold relative flex h-full"
                >
                  <div className="flex justify-center px-3 items-center ">
                    <Link
                      to={link}
                      className={`flex-col justify-between items-center${
                        isDarkMode ? "text-light-primary" : "text-dark-primary"
                      } relative cursor-pointer after:content-[''] ${
                        isDarkMode
                          ? "after:bg-light-primary"
                          : "after:bg-dark-primary"
                      } font-Rabar text-lg after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[4px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                    >
                      {name}
                    </Link>
                    {submenu && (
                      <div className="flex w-full ">
                        <button
                          onClick={() => toggleSubmenu(id)}
                          className="pr-1 text-xl  transition-transform duration-300 group-hover:rotate-180 "
                        >
                          <RiArrowDropDownLine />
                        </button>
                        <ul
                          className={`animation ${getNavbarOpacity()} hidden group-hover:flex flex-col justify-between  absolute top-[96px] w-40 right-0 rounded-3xl rounded-t-none 
                         ${
                           isDarkMode
                             ? "bg-dark-primary text-dark-secondary "
                             : "bg-light-primary text-light-secondary "
                         }
                           duration-200`}
                        >
                          {submenu.map(({ id, name, link }) => (
                            <li key={id}>
                              <Link
                                to={link}
                                className={`${
                                  isDarkMode
                                    ? "text-light-primary"
                                    : "text-dark-primary"
                                }`}
                              >
                                <div className="flex justify-start text-start gap-4 text-sm lg:text-base pb-6 font-semibold pr-3 hover:scale-110 hover:px-4 duration-300">
                                  {name}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              ))}

              {/* Dark and Light mode icon */}
              <li className="my-auto">
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center text-2xl"
                >
                  {isDarkMode ? (
                    <MdOutlineLightMode
                      className={`${
                        isDarkMode
                          ? "text-dark-secondary"
                          : "text-light-secondary"
                      }`}
                    />
                  ) : (
                    <MdOutlineDarkMode />
                  )}
                </button>
              </li>
            </ul>

            {/* Mobile Navbar */}
            <div
              className={`  ${getNavbarOpacity()} md:hidden border-none flex items-center gap-4 z-30`}
            >
              <div>
                {!showNavbar ? (
                  <HiMenuAlt2
                    onClick={toggleNav}
                    className={` cursor-pointer ${
                      isDarkMode
                        ? "text-dark-secondary"
                        : "text-light-secondary"
                    }`}
                    size={24}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleNav}
                    className={`  cursor-pointer ${
                      isDarkMode
                        ? "text-dark-secondary"
                        : "text-light-secondary"
                    }`}
                    size={24}
                  />
                )}
              </div>
              <button
                onClick={toggleTheme}
                className="text-2xl flex items-center justify-center"
              >
                {isDarkMode ? (
                  <MdOutlineLightMode
                    className={`${
                      isDarkMode
                        ? "text-dark-secondary "
                        : "text-light-secondary"
                    }`}
                  />
                ) : (
                  <MdOutlineDarkMode />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navbar Menu */}
          {showNavbar && (
            <div
              className={`  ${getNavbarOpacity()} relative top-0 left-0 w-full  ${
                isDarkMode ? "bg-dark-primary " : "bg-light-primary"
              } `}
            >
              <ul
                className={`flex flex-col items-start gap-4 p-4 min-h-screen `}
              >
                {NavLinks.map(({ id, name, link, submenu }) => (
                  <li
                    key={id}
                    className={` py-2 font-semibold w-full`}
                    onClick={() => setShowNavbar(false)}
                    onMouseEnter={() => toggleSubmenu(id)}
                    onMouseLeave={() => toggleSubmenu(null)}
                  >
                    <div
                      className={`flex items-center animationMobile ${
                        isDarkMode ? "text-light-primary" : "text-dark-primary"
                      }`}
                    >
                      <Link
                        to={link}
                        className={`group  ${
                          isDarkMode
                            ? "text-light-primary"
                            : "text-dark-primary"
                        } relative cursor-pointer after:content-[''] ${
                          isDarkMode
                            ? "after:bg-light-primary "
                            : "after:bg-dark-primary "
                        } after:absolute after:h-[2px] after:origin-center after:w-[0%] after:left-full after:-bottom-[9px] after:rounded-xl after:duration-200 hover:after:left-0 hover:after:w-[100%]`}
                      >
                        <span>{name}</span>
                      </Link>
                      {submenu && (
                        <button
                          className={`pr-1 text-xl duration-200 group-hover:rotate-180 `}
                        >
                          <RiArrowDropDownLine />
                        </button>
                      )}
                    </div>
                    {submenu && openSubmenu === id && (
                      <ul
                        className={`w-full mt-4 absolute${
                          isDarkMode ? "bg-dark-primary " : "bg-light-primary "
                        }`}
                      >
                        {submenu.map(({ id, name, link }) => (
                          <li className="py-3 pr-10 animationMobile hover:scale-110 duration-300">
                            <Link
                              to={link}
                              key={id}
                              onClick={() => setShowNavbar(false)}
                              className={`flex-col justify-between items-center${
                                isDarkMode
                                  ? "text-light-primary"
                                  : "text-dark-primary"
                              }  `}
                            >
                              {name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
