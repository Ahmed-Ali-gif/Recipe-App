import React from "react";

const DifficultyFilter = () => {
  return (
    <div className="bg-gray-400 px-2 py-1 rounded-xl">
      <select className="border-0 outline-0">
        <option disabled selected>
          Difficulty
        </option>
        <option className="bg-gray-600 px-2 py-1" >
          Easy
        </option>
        <option className="bg-gray-600 px-2 py-1" >
          Medium
        </option>
        <option className="bg-gray-600 px-2 py-1" >
          Hard
        </option>
      </select>
    </div>
  );
};

export default DifficultyFilter;
