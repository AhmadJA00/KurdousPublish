import React from "react";
import { Link } from "react-router-dom";
import { documetaries } from "../data/Documetaries.js";

const Documentaries = () => {
  return (
    <section
      className={` px-2 md:px-8 bg-light-primary text-light-secondary dark:bg-dark-primary dark:text-dark-secondary `}
    >
      <div className=" flex flex-col justify-around gap-9 lg:gap-8">
        <div className="txt flex flex-col items-start mt-24">
          <h1 className="text-light-secondary text-2xl font-semibold md:font-extrabold md:text-3xl dark:text-white">
            نوێترین ژێرنوسکراوەکان
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {documetaries.map(({ id, name, img }) => (
            <Link to={`/Description/${id}`} key={id}>
              <div className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full">
                <div>
                  <img
                    src={img}
                    className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110 "
                  />
                  <h1
                    className={`absolute rounded-t-sm z-10 flex justify-center items-center bottom-0 left-0 right-0 p-3 font-semibold text-sm md:text-base
                      bg-light-primary text-light-secondary bg-opacity-50 dark:bg-dark-primary dark:text-dark-secondary dark:bg-opacity-50`}
                  >
                    {name}
                  </h1>
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
