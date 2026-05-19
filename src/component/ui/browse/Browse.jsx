import React from "react";
import Dinner from "./Dinner";

const Browse = () => {
  return (
    <div>
      <h2 className="font-bold py-1 text-center text-2xl">Browse by Categories</h2>
      <div className="flex justify-around py-3">
        <Dinner
          name="Breakfast"
          className="border-2 px-4 py-4 inline-block rounded-2xl"
        />
        <Dinner
          name="Lunch"
          className="border-2 px-4 py-4 inline-block rounded-2xl"
        />
        <Dinner
          name="Dinner"
          className="border-2 px-4 py-4 inline-block rounded-2xl"
        />
        <Dinner
          name="Salad"
          className="border-2 px-4 py-4 inline-block rounded-2xl"
        />
        <Dinner
          name="Drink"
          className="border-2 px-4 py-4 inline-block rounded-2xl"
        />
        <Dinner />
      </div>
    </div>
  );
};

export default Browse;
