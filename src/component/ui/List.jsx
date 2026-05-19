import React from 'react'
import { NavLink } from 'react-router-dom'

const List = ({title,path}) => {
  return (
       <li>
          <NavLink
            className={({ isActive }) =>
              `text-lg font-semibold px-2 py-1 ${
                isActive
                  ? "border-b-2 border-orange-400 text-orange-400"
                  : "hover:text-orange-400"
              }`
            }
            to={path}
          >
            {title}
          </NavLink>
        </li>
  )
}

export default List