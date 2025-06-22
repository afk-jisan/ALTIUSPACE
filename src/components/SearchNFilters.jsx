const SearchNFilters = () => {
  return (
    <div class="flex items-center space-x-4 p-4 my-10 rounded-lg">
      <div class="relative ">
        <input
          type="text"
          placeholder="Search projects..."
          class="w-[320px] h-[50px] py-2 px-4 rounded-lg bg-[#2d2d2d] text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
        />
      </div>

      <div class="text-gray-400 text-xl cursor-pointer"><img src="./resetFilter.svg"/></div>

      <div class="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
        <button class="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-br from-[#8a2be2] to-[#4b0082] focus:outline-none">
          All
        </button>

        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          Analytics
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          Fintech
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          Dev Tools
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          Healthcare
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          Enterprise
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          AI/ML
        </button>
        <button class="px-4 py-2 rounded-lg font-medium text-gray-300 bg-[#2d2d2d] hover:bg-[#3a3a3a] focus:outline-none">
          OTHERS
        </button>
      </div>
    </div>
  );
};

export default SearchNFilters;
