import { useState } from "react";

const SearchBar = ({ images, setFilteredImages }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredImages = images.filter((image) =>
      image.caption.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredImages(filteredImages);
  };

  return (
    <div className="search-bar w-[100%] h-16 border flex justify-center items-center bg-slate-400 ">
      <div className="relative flex justify-center items-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              className="heroicon-ui"
              d="M14.5,13h-.79l-.28-.27a6,6,0,1,0-.8.8l.27.28v.79l4.3,4.29a1,1,0,0,0,1.42-1.42L14.5,13ZM6,11a4,4,0,1,1,4,4A4,4,0,0,1,6,11Z"
            />
          </svg>
        </span>
        <input
          className="block w-full pl-10 pr-4 py-2 rounded-lg leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
          type="text"
          placeholder="Search images by caption..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default SearchBar;
