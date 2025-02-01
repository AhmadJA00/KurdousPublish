import React, { useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { documetaries } from "../data/Documetaries.js";

export const dropdownData = [
  {
    id: 1,
    name: "جۆری دۆکیۆمێنتاری",
    dropdown: [
      {
        id: 1,
        name: "هەموو",
        category: null,
      },
      {
        id: 2,
        name: "ژیانی ئاژەڵە کێوییەکان",
        category: "ژیانی ئاژەڵە کێوییەکان",
      },
    ],
  },
];

const DocumenterisFilter = ({ isDarkMode }) => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams(); // ? AHMED'S CODE
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const [data, setData] = React.useState(documetaries);

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Filter documents based on the selected category
  // ? AHMED'S CODE
  const filteredDocs = (type) => {
    let tempDoc;
    if (type) {
      tempDoc = documetaries.filter((doc) => doc.category === type);
    } else {
      tempDoc = documetaries;
    }
    setData(tempDoc);
  };

  // ? AHMED'S CODE
  React.useEffect(() => {
    filteredDocs(selectedCategory || searchParams.get("type"));
  }, [selectedCategory, location.search]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // ? AHMED'S CODE
    setSearchParams({});
    setOpenDropdown(null); // Close dropdown after selection
  };

  return (
    <section
      className={`px-2 md:px-8 pt-28 lg:pt-36  ${
        isDarkMode
          ? "bg-dark-primary text-dark-secondary"
          : "bg-light-primary text-light-secondary"
      }`}
    >
      <div className="flex flex-col justify-around gap-8 lg:gap-12 px-5 ">
        {/* Header */}
        <div className="flex items-center gap-2 mt-10 ">
          <div className="pl-2 md:pl-8">
            <h1 className="font-bold text-xl md:text-2xl">دۆکیۆمێنتارییەکان</h1>
          </div>
          <div className={`flex justify-between items-center relative`}>
            {dropdownData.map(({ id, name, dropdown }) => (
              <div key={id} className="inline-block text-right relative">
                <button
                  className={`flex  items-center text-sm md:text-base justify-between gap-2 px-2 md:px-4 py-1 md:py-2 pb-2 md:pb-3 ${
                    openDropdown ? "rounded-t-3xl " : "rounded-3xl"
                  } ${
                    isDarkMode
                      ? "bg-gray-200 text-dark-primary"
                      : "bg-light-secondary text-white"
                  }`}
                  onClick={() => toggleDropdown(id)}
                >
                  {name}
                  <RiArrowDropDownLine
                    size={24}
                    className={`${openDropdown ? "rotate-180" : "rotate-0"}`}
                  />
                </button>
                {openDropdown === id && (
                  <div
                    onMouseLeave={() => toggleDropdown(null)}
                    className={`absolute animation  w-full rounded-b-sm z-20 ${
                      isDarkMode
                        ? "bg-dark-secondary text-dark-primary"
                        : "bg-light-secondary text-white"
                    }`}
                    style={{ top: "100%", left: 0 }}
                  >
                    {dropdown.map((item) => (
                      <Link
                        key={item.id}
                        onClick={() => handleCategorySelect(item.category)}
                        className={`block text-sm md:text-base p-2 md:px-4 md:py-3 border-t-[1px] rounded-b-sm ${
                          isDarkMode
                            ? "bg-dark-secondary text-dark-primary hover:bg-gray-100"
                            : "bg-light-secondary text-white border-t-slate-600 hover:bg-[#0B1A2B]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {data?.map(({ id, name, img }) => (
            <Link to={`/Description/${id}`} key={id}>
              <div className="group relative h-[300px] md:h-[400px] cursor-pointer overflow-hidden flex justify-center items-center rounded-md w-full">
                <div>
                  <img
                    src={img}
                    className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-110"
                  />
                  <h1
                    className={`absolute flex justify-center items-center bottom-0 left-0 right-0 p-3 font-semibold text-sm md:text-base ${
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
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex font-medium items-center justify-start md:items-start mt-3 md:mt-6 gap-2 text-sm md:text-base">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`border-[1px] border-opacity-50 p-1 px-3 md:p-2 md:px-4 rounded-full ${
              isDarkMode
                ? "text-light-primary border-light-primary "
                : "text-dark-primary border-dark-primary "
            } ${currentPage === 1 ? "text-gray-500 cursor-not-allowed" : ""}`}
          >
            پێشتر
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const isActive = currentPage === index + 1;
            return (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`p-1 px-3 md:p-2 md:px-4 rounded-full border-[1px] ${
                  isActive
                    ? isDarkMode
                      ? "bg-dark-secondary text-dark-primary border-dark-secondary"
                      : "bg-light-secondary text-light-primary border-light-secondary"
                    : isDarkMode
                    ? "border-light-primary text-light-primary border-opacity-50"
                    : "border-dark-primary text-dark-primary border-opacity-50"
                }`}
              >
                {index + 1}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`border-[1px] border-opacity-50 p-1 px-3 md:p-2 md:px-4 rounded-full ${
              isDarkMode
                ? "text-light-primary border-light-primary "
                : "text-dark-primary border-dark-primary "
            } ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : ""
            }`}
          >
            دواتر
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumenterisFilter;
