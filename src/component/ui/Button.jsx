import React from 'react'

const Button = ({name,icon,className}) => {
  return (
    <>
    <button className={className}> {icon} {name}</button>
    </>
  )
}

export default Button