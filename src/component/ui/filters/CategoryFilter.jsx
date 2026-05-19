import React from 'react'

const CategoryFilter = () => {
  return (
    <div className='bg-gray-400 px-2 py-1 rounded-xl'>
      <select className="border-0 outline-0">
        <option disabled selected>All Categories</option>
        <option className="bg-gray-600 px-2 py-1">Breakfast</option>
        <option className="bg-gray-600 px-2 py-1">Lunch</option>
        <option className="bg-gray-600 px-2 py-1">Dinner</option>
        <option className="bg-gray-600 px-2 py-1">Dessert</option>
      </select>
    </div>
  )
}

export default CategoryFilter