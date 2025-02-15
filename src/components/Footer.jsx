import React from "react";
import logo_light_mode from "../assets/images/light_logo.png";
import logo_dark_mode from "../assets/images/dark_logo.png";

const Footer = ({ isDarkMode }) => {
  return (
    <section className="pt-10 flex justify-center items-center bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary">
      <div className="container flex flex-col lg:flex-row justify-between px-5 items-center border-t-[1px] rounded-xl pb-4 lg:pb-0 w-11/12 border-light-secondary dark:border-dark-secondary">
        <img
          src={isDarkMode ? logo_dark_mode : logo_light_mode}
          className="h-20 w-28 md:h-24 md:w-36 object-cover"
          alt="Logo"
        />
        <h1 className="font-medium text-center md:text-start">
          کوردۆوش یەکەمین ماڵپەڕەی تایبەتە بە فیلمی دۆکیۆمێنتاری بە ژێرنووسی
          کوردی، هەواڵ و تێڕوانین بۆ ژیانی ئاژەڵان و فیلمی دیکۆمێنتاری پێشکەش
          دەکات
        </h1>
      </div>
    </section>
  );
};

export default Footer;
