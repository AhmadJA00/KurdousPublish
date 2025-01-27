import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { Documetaries } from "../Data/data";

const Description = ({ isDarkMode }) => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const { id } = useParams();

  const video = Documetaries.find((video) => video.id === parseInt(id));

  const getBackgroundOpacity = () => {
    return openSubmenu ? "bg-opacity-50" : "bg-opacity-100";
  };

  return (
    <section
      className={`flex flex-col min-h-screen px-2 md:px-20 pt-28 md:pt-20 w-full ${getBackgroundOpacity()} ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className="flex flex-col lg:flex-row mt-1 xl:mt-10 items-center lg:py-20">
        <div className="flex-shrink-0 md:w-1/2 lg:w-2/5 mt-10 md:mt-14 lg:mt-1">
          <img
            src={video.img}
            className="w-full rounded-md h-96 object-cover"
          />
        </div>

        <div className="flex-grow flex flex-col lg:w-3/5 space-y-3 px-4 mt-10">
          <div className="flex flex-col items-start border-r-[1.5px] rounded-md border-dark-tertiary pr-5">
            <h1 className="font-bold text-xl">{video.title}</h1>
            <span className="text-base opacity-80">{video.description}</span>
          </div>

          {video.metadata.map((item, id) => (
            <div
              key={id}
              className="flex items-center gap-4 border-r-[1.5px] rounded-md border-dark-tertiary pr-5"
            >
              <h1 className="font-bold text-xl">{item.label}</h1>
              <p className="text-base opacity-80">{item.value}</p>
            </div>
          ))}

          <Link to={`/AnimailVideo/${id}`}>
            <button className="group mt-4 relative py-1 px-6 md:px-8 rounded-full z-10 bg-white font-medium w-44 mx-auto mb-7">
              <div className="circle absolute w-1/4 h-full bg-light-tertiary rounded-full right-0 z-20 top-0 group-hover:w-full duration-200">
                <FaChevronRight className="absolute text-primary-color top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-75 group-hover:opacity-0" />
              </div>
              <div className="text-light-tertiary text-lg font-medium relative z-20 transition-all group-hover:text-white">
                {video.btn}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Description;
