import React from "react";
import { Link } from "react-router-dom";
import { Documetaries } from "../Data/data";

const Documentaries = ({ isDarkMode }) => {
  return (
    <section
      className={` px-2 md:px-8 ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className=" flex flex-col justify-around gap-9 lg:gap-8">
        <div className="txt flex flex-col items-start mt-24">
          <h1 className="text-yellow-color font-extrabold text-3xl">
            نوێترین ژێرنوسکراوەکان
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {Documetaries.map(({ id, name, img }) => (
            <Link to={`/Description/${id}`} key={id}>
              <div className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full">
                <div>
                  <img
                    src={img}
                    className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110 "
                  />
                  <h1
                    className={`absolute rounded-t-sm z-10 flex justify-center items-center bottom-0 left-0 right-0 p-3 font-semibold text-sm md:text-base ${
                      isDarkMode
                        ? "bg-dark-primary text-dark-secondary"
                        : "bg-light-primary text-light-secondary"
                    } `}
                    style={{
                      backgroundColor: isDarkMode
                        ? "rgba(14, 32, 54, 0.5)"
                        : "rgba(207, 207, 207, 0.8)",
                    }}
                  >
                    {name}
                  </h1>
                  {/* <div
                    className={`flex justify-between items-center w-full top-0 left-0 right-0 absolute z-10  ${
                      isDarkMode ? " text-dark-primary" : " text-light-primary"
                    } `}
                  >
                    <div className="flex justify-around items-center p-4">
                      <IoEyeOutline />
                      <p className="p-1 text-xs font-medium">١٤٤</p>
                    </div>
                    <div className="flex justify-around items-center p-4">
                      <MdOutlineAccessTime />
                      <p className="p-1 text-xs font-medium"> ١٤ خولەک</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentaries;
