import React from 'react'
import HeroText from './HeroText'
import Heropic from './Heropic'

const HeroContainer = () => {
  return (
    <div className='flex justify-around min-w-full items-center mt-20'>
      <HeroText/>
      <Heropic/>
    </div>
  )
}

export default HeroContainer