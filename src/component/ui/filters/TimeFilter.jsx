import React from "react";

const TimeFilter = () => {
  return (
    <div className='bg-gray-400 px-2 py-1 rounded-xl'>
      <select className="border-0 outline-0">
        <option className="bg-gray-600 px-2 py-1" disabled selected>
          Max-Cook-time
        </option>
        <option className="bg-gray-600 px-2 py-1">10-minutes</option>
        <option className="bg-gray-600 px-2 py-1">20-minutes</option>
        <option className="bg-gray-600 px-2 py-1">30-minutes</option>
      </select>
    </div>
  );
};

export default TimeFilter;
