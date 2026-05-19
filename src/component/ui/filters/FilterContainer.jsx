import React from "react";
import SearchFilter from "../SearchFilter";
import { IoIosSearch } from "react-icons/io";
import CategoryFilter from "./CategoryFilter";
import DifficultyFilter from "./DifficultyFilter";
import TimeFilter from "./TimeFilter";
import Button from "../Button";

const FilterContainer = () => {
  return (
    <div className="bg-gray-500 px-4 mx-7 rounded-2xl my-5 py-3 flex justify-between items-center ">
      <SearchFilter
        className="bg-gray-400 w-64 rounded-2xl py-1 px-7 flex items-center"
        icon={<IoIosSearch />}
      />
      <CategoryFilter />
      <DifficultyFilter />
      <TimeFilter />
      <Button
        className="text-lg text-white bg-amber-600 px-4 py-1 font-semibold rounded-lg"
        name="Search"
      />
    </div>
  );
};

export default FilterContainer;
