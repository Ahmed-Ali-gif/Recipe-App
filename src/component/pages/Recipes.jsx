import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ListApi from "../api/ListApi";
import Button from "../ui/Button";

const Recipes = () => {
  const data = useLoaderData();
  const navigateBack = useNavigate();
  const handleClick = () => {
    navigateBack(-1);
  };
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mx-6 my-2 gap-6 ">
        {data.recipes.map((recipes) => {
          return <ListApi key={recipes.id} recipes={recipes} />;
        })}
      </ul>
      <div
        onClick={handleClick}
        className="flex justify-center items-center my-5"
      >
        <Button
          className="text-lg text-white bg-amber-600 cursor-pointer px-4 py-1 font-semibold rounded-lg"
          name="GoBack"
        />
      </div>
    </div>
  );
};

export default Recipes;
