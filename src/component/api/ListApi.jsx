import React from "react";

const ListApi = ({recipes}) => {
  const {id,image,name,mealType,rating,caloriesPerServing,reviewCount,tags} = recipes
  
  return (
    <>
      <li
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <article>
          <div className="overflow-hidden">
            <img
              className="w-full h-56 object-cover hover:scale-200 transition-transform duration-500"
              src={image}
              alt={name}
            />
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                {mealType.join(", ")}
              </span>

              <span className="text-yellow-500 font-semibold">
                ⭐ {rating}
              </span>
            </div>

            <h2 className="text-xl font-bold mt-4 text-gray-800">
              {name}
            </h2>

            <p className="text-gray-500 mt-2 text-sm leading-6">
              Calories: {caloriesPerServing}
            </p>

            <div className="flex justify-between items-center mt-5">
              <span className="text-gray-400 text-sm">
                {reviewCount} Reviews
              </span>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
                View Recipe
              </button>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default ListApi;
