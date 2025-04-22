"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBox({ data, setDisplayed }) {
  const [value, setValue] = useState("");
  console.log(value);
  const searchHandler = () => {
    const filteredData = data.filter((item) => {
      return item.title.toLowerCase().trim().includes(value);
    });
    setDisplayed(filteredData);
  };
  return (
    <div className="flex items-center gap-x-2 mb-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className=" w-[280px] md:w-[350px] py-2 px-5 text-xl focus:outline-none"
        placeholder="search..."
      />
      <button
        onClick={searchHandler}
        className="text-xl bg-zinc-400 py-2 px-4 rounded-sm"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBox;
