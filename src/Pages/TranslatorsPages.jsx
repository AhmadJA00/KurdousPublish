import React from "react";
import { Link } from "react-router-dom";
import { translatorsList } from "../data/Translators.js";

const TranslatorsPages = ({ isDarkMode }) => {
  return (
    <section
      className={`flex flex-col justify-around items-start px-2 md:px-24 pt-28 lg:pt-36 ${
        isDarkMode ? "bg-dark-primary" : "bg-light-primary"
      }`}
    >
      <div className="flex flex-col justify-start items-center mt-14">
        <div>
          <h1
            className={`uppercase ${
              isDarkMode ? "text-dark-secondary" : "text-light-secondary"
            } font-extrabold text-3xl group relative cursor-pointer`}
          >
            وەرگێڕەکان
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mb-24">
        {translatorsList.map(
          ({ id, TranslatorName, title, TranslatorImage, number }) => (
            <Link
              key={id}
              to={`/TranslatorDescription/${id}`}
              className="group p-2 h-[400px] relative cursor-pointer overflow-hidden flex justify-center rounded-md mt-8 w-full"
            >
              <img
                src={TranslatorImage}
                className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-105"
              />
              <div
                className={`w-full absolute left-0 -bottom-full space-y-2 py-2 ${
                  isDarkMode
                    ? "bg-dark-primary text-dark-secondary"
                    : "bg-light-primary text-light-secondary"
                }  transition-all duration-300 group-hover:bottom-0`}
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(14, 32, 54, 0.4)"
                    : "rgba(207, 207, 207, 0.4)",
                }}
              >
                <h1 className="font-bold text-xl pt-1 text-center">
                  {TranslatorName}
                </h1>
                <p className=" text-center">{title}</p>
                <p className=" text-center pb-1 font-light ">{number}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default TranslatorsPages;
