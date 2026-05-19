import React from "react";
import Button from "../ui/Button";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { NavLink } from "react-router-dom";
const HeroText = () => {
  return (
    <div className=" ">
      <div className="bg-gray-300 px-2 py-1 rounded-4xl inline-block">
        <p className="text-xs uppercase text-orange-400">cook eat enjoy</p>
      </div>
      <p className="uppercase text-5xl font-semibold w-[36rem] py-2">
        Discover Delicious Recipes for
        <span className="text-orange-400">every Mood</span>
      </p>
      <p className="text-xl w-[28rem] py-3 ">
        Explore thousands of healthy and tasty recipes crafted with love. Find
        your next favorite meal!!
      </p>
      <div className="flex gap-2">
        <NavLink to="/recipes">
          <Button
            className="text-lg text-white bg-amber-600 cursor-pointer px-4 py-1 font-semibold rounded-lg"
            name="Explore Recipes"
          />
        </NavLink>
        <Button
          className="text-lg  px-4 py-1 border rounded-lg flex items-center cursor-pointer gap-2"
          name="Watch video"
          icon={<SiGoogledisplayandvideo360 />}
        />
      </div>
    </div>
  );
};

export default HeroText;
