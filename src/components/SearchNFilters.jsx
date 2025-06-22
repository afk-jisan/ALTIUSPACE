import { useState } from "react";

const SearchNFilters = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Analytics",
    "Fintech",
    "Dev Tools",
    "Healthcare",
    "Enterprise",
    "AI/ML",
    "OTHERS",
  ];

  return (
    <div className="flex items-center space-x-4 p-4 my-10 rounded-lg">
      <div className="relative">
        <input
          type="text"
          placeholder="Search projects..."
          className="w-[320px] h-[50px] py-2 px-4 rounded-lg bg-[#2d2d2d] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>

      <div className="text-gray-400 text-xl cursor-pointer">
        <img src="./resetFilter.svg" />
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg font-medium focus:outline-none ${
              selectedCategory === cat
                ? "text-white bg-gradient-to-br from-[#8a2be2] to-[#4b0082]"
                : "text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchNFilters;
