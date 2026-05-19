import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import ListApi from "../../api/ListApi";
const FeatureCrdas = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const gettingData = async () => {
    try {
      const url = "https://dummyjson.com/recipes";
      const res = await fetch(url);
      if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      setRecipeData(data.recipes);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    gettingData();
  }, []);
  if (error)
    return <h1 className="text-3xl text-center font-semibold">Error.....</h1>;
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  return (
    <div>
      <div className="flex justify-between items-center mx-8">
        <h2 className="font-bold py-1 text-2xl">Featured Recipes</h2>
        <span className="flex items-center ">
          <span>View All Recipes </span>
          <span>
            <FaLongArrowAltRight className="text-lg" />
          </span>
        </span>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] mx-6 my-2 gap-6 ">
        {recipeData.slice(0, 3).map((recipes) => {
          return <ListApi key={recipes.id} recipes={recipes} />;
        })}
      </ul>
    </div>
  );
};

export default FeatureCrdas;
