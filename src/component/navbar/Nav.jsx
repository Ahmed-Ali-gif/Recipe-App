import React from "react";
import { NavLink } from "react-router-dom";
import SearchFilter from "../ui/SearchFilter";
import { MdFavoriteBorder } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import List from "../ui/List";
const Nav = () => {
  const NavItems = [
    {title: "Home", path:"/"},
    {title: "Recipes", path:"/recipes"},
    {title: "Categories", path:"/categories"},
    {title: "MealPlan", path:"/mealplan"},
    {title: "About", path:"/about"},
    {title: "Contact", path:"/contact"}
  ]
  return (
    <div className="w-full flex justify-around items-center">
      <ul className="flex gap-2">
      {
        NavItems.map((item)=>{
          return(
            <List key={item.path} title={item.title} path={item.path}/>
          )
        })
      }
      </ul>
      <SearchFilter className='bg-gray-400 rounded-2xl py-1 px-7 flex items-center' icon={ <IoIosSearch /> } />
      <MdFavoriteBorder className="text-xl text-white" />
    </div>
  );
};

export default Nav;
