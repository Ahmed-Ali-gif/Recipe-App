import React from 'react'

const SearchFilter = ({icon,className}) => {
  return (
    <div className={className}>
      <input className='outline-0 border-0'  type="text" name="" id="" placeholder='search recipes'/>
      {icon}
    </div>
  )
}

export default SearchFilter