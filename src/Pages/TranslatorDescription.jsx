import React from "react";
import { useParams, Link } from "react-router-dom";
import { translatorsList } from "../Data/translator";

const TranslatorDescription = ({ isDarkMode }) => {
  const { id } = useParams(); // Get the translator ID from the URL
  const translator = translatorsList.find(
    (translator) => translator.id === parseInt(id)
  ); // Find the translator by ID

  const { TranslatorName, title, AllDatas } = translator;

  return (
    <section
      className={`flex flex-col px-4 md:px-20 pt-28 lg:pt-36 min-h-screen ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      {/* Translator Header */}
      <div className="pt-10">
        <h1 className="font-bold text-2xl">{TranslatorName}</h1>
        <p>{title}</p>
      </div>

      {/* Translator's Works */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-10">
        {AllDatas.map(({ id, name, img }) => (
          <Link to={`/Description/${id}`} key={name}>
            <div
              key={name}
              className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full"
            >
              <img
                src={img}
                className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110"
              />
              <h1
                className={`absolute flex items-center justify-center bottom-0 left-0 right-0 p-3 font-semibold text-sm md:text-base ${
                  isDarkMode
                    ? "bg-dark-primary text-dark-secondary"
                    : "bg-light-primary text-light-secondary"
                }`}
                style={{
                  backgroundColor: isDarkMode
                    ? "rgba(14, 32, 54, 0.5)"
                    : "rgba(207, 207, 207, 0.8)",
                }}
              >
                {name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TranslatorDescription;
